const express = require("express");
const bodyParser = require("body-parser");
const cors=require("cors");
var mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/soar");
const app = express();
let ping = require('ping');
const { exec } = require('child_process');
// app.use(bodyParser.json);
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app. use(function(req, res, next) {
	res. header("Access-Control-Allow-Origin", "*");
	res. header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
	});
const http = require("http");
const {Server} = require("socket.io");
const server = http.createServer(app);
const io = new Server(server,{
	cors:{
		origin:"*",
		methodes : ["GET","POST"],
	},
});




const User = require("./models/User");
const Warning = require("./models/Warning.js");
const Incedent = require("./models/Incedent");
const Login = require("./models/Login");
const Action = require("./models/Action");
const Device = require("./models/Device");
var text="";
const data = {
	fullname: 'None',
	status: 'None'
  };
const ok_user = {
insertion: 'finished',
};
  // Convert the object to a JSON string
var jsonData = JSON.stringify(data);
var user_inserted = JSON.stringify(ok_user);
var resp={}
var resp2={}

// const host = '8.0.0.1';
// ping.sys.probe(host, (isAlive) => {
// 	// const msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
// 	console.log(isAlive);
//   });











io.on('connection', (socket) => {
	console.log('A user connected');
	socket.emit("on","hani jit")
    socket.on("msg",(msg) => {
		console.log(msg);
	})

	app.get("/test" , async (req,res) => {
		socket.emit("almost", "hahi jaya");
		let sok=req.query;   
		sok.date={year:"1222",month:"mar",time:"12:12"};
		sok.status="not seen"
		const incident = new Incedent(sok);
		const result = await incident.save();
		console.log(sok);
		res.send("hih");
		})
		

	socket.on('disconnect', () => {
		console.log('A user disconnected');
		});
	});
	


app.get('/login', async (req, res) => {
	try {
		const result = await User.findOne({_id:req.query.email+req.query.password},{_id:0,fullname:1,status:1});
		if (result){
		resp = JSON.stringify(result);
		io.on('connection', (socket) => {
			socket.emit("user",resp);
			});

		res.send(resp);

		// }
		}else{
		resp=JSON.stringify(data);
		res.send(resp);	

		}
		
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
	});
app.get('/adduser', async (req, res) => {
try {
	const result = await User.insertMany({_id:req.query.email+req.query.password,fullname:req.query.fullname,email:req.query.email,password:req.query.password,status:req.query.status});
	if (result){
		res.json(user_inserted);
	}else{
		res.send("error");
	}
} catch (err) {
	if(err.code==11000){
		console.log(err);
		res.json(JSON.stringify(err));
	}}
});
app.get('/addDevice', async (req, res) => {
	try {
		const result = await Device.insertMany({type:req.query.type,name:req.query.name,ip:req.query.ip,status:""});
		if (result){
			res.json(user_inserted);
		}else{
			res.send("error");
		}
	} catch (err) {
		if(err.code==11000){
			console.log(err);
			res.json(JSON.stringify(err));
		}}
	});
app.get('/getusers', async (req, res) => {
	try {
		const result = await User.find({},{_id:1,fullname:1,email:1,status:1});
		if (result){
		
			res.json(result);
			}else{
			}
		} catch (err) {
		console.log(err);
		res.json(jsonData);
		}
			
});
app.get('/getDevice', async (req, res) => {
	try {
		const result = await Device.find({});
		if (result){
     		res.json(getDeviceStatus(result));
			}else{
			}
		} catch (err) {
		console.log(err);
		res.json(jsonData);
		}		
});
app.get("/warning", (req,res) => {
	Warning.find({},function(err,result){
		res.send(result);
	})
})
app.get("/incedent",async (req,res) => {
try {
	const result = await Incedent.find({},{status:0});
	if (result){
	//   resp = JSON.stringify(result[0]);
		res.json(result);
		}else{
		}
	} catch (err) {
	console.log(err);
	res.json(jsonData);
	}
})
app.get("/ulogin", (req,res) => {
	Login.find({},function(err,result){
		res.send(result);
	})
})
app.get("/action", (req,res) => {
	Action.find({},function(err,result){
		res.send(result);
	})
})
app.post("/print", async (req,res) => {
	let body = '';

	req.on('data', chunk => {
		body += chunk.toString();
	});

	req.on('end', async () => {
		const data = JSON.parse(body);
	
		try {
		const incedent = new Incedent(data);
		const result = await incedent.save();
		if (result){
			res.send('Data received');
		}else{
			res.send("error");
		}
	} catch (err) {
		// if(err.code==11000){
			console.log(err);
			res.send('err');
		// }
	}
	});
	
})

app.get("/stat",async (req,res) => {
	try {
		const result = await Incedent.find({},{status:0,_id:0,description:0});
		
		//   resp = JSON.stringify(result[0]);
			
			const pie = statisticsPie(result);
			const bar=statisticsBar(result);
			
			const stat=[pie,bar];
			res.json(stat);
			
		} catch (err) {
		console.log(err);
		res.json(jsonData);
		}
	})








function findProtocol(p,list){
	var is = false ;
	var i =0;
	while (!is && i<list.length){
		if (list[i].protocol==p){
			list[i].count=list[i].count+1;
			is=true;
			break;
		}else{
			i=i+1;
		}
	}

	if (!is){
		list.push({protocol:p,count:1});
	}
	return is;
}
function findMonth(p,list){
	var is = false ;
	var i =0;
	while (!is && i<list.length){
		if (list[i].month==p){
			list[i].pv=list[i].pv+1;
			is=true;
			break;
		}else{
			i=i+1;
		}
	}

	if (!is){
		list.push({month:p,pv:1});
	}
	return is;
}
function statisticsPie(plist){
	if(plist.length == 0){
		return [];
	}else{
	var finalList=[];
    finalList.push({protocol:plist[0].protocol,count:1});
	for (let x = 1;x<plist.length;x++){
     findProtocol(plist[x].protocol,finalList)

	}
    var a=[];
	var b=[];
	for (let i = 1;i<finalList.length;i++){
		a.push(finalList[i].protocol);
		b.push(finalList[i].count);
   
	   } 
    var  c=[a,b]
	console.log(c);
	return c;
	}
}
function statisticsBar(plist){
	if(plist.length == 0){
		return [];
	}else{
	var finalList=[];
    finalList.push({month:plist[0].date.month,pv:1});
	for (let x = 1;x<plist.length;x++){
     findMonth(plist[x].date.month,finalList)

	}
	return finalList;
}
}
function getDeviceStatus(list) {
	var finalList = list;
	for (var i = 0; i < list.length; i++) {
	
	//   try {
	// 	ping.sys.probe(list[i].ip, (isAlive) => {
		  if (true) {
			finalList[i].status = "Active";
		  } else {
			// list[i].status = "noActive";
			console.log("no");
		  }
	// 	});
	//   } catch (error) {
	// 	console.error(error);
	// 	finalList[i].status = "Error";
	//   }
	}
    const fl = finalList.sort((a, b) => {
		const nameA = a.type.toUpperCase(); // convert name to uppercase
		const nameB = b.type.toUpperCase(); // convert name to uppercase
		if (nameA < nameB) {
		  return -1;
		}
		if (nameA > nameB) {
		  return 1;
		}
		return 0;
	  }); 
	return fl;
  }
  






 


server.listen(4000, () => {
	console.log("server is running on 4000");
});
