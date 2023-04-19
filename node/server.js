const express = require("express");
const bodyParser = require("body-parser");
const cors=require("cors");
const multer = require('multer');
const fs = require('fs');
var mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/alaa");
const app = express();
const { exec } = require('child_process');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app. use(function(req, res, next) {
	res. header("Access-Control-Allow-Origin", "*");
	res. header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
	});
const http = require("http");
// const {Server} = require("socket.io");
const server = http.createServer(app);
// const io = new Server(server,{
// 	cors:{
// 		origin:"*",
// 		methodes : ["GET","POST"],
// 	},
// });

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, 'uploads/');
	},
	filename: function (req, file, cb) {
		const originalName = file.originalname;
	    const extension = originalName.substring(originalName.lastIndexOf('.'));

	  cb(null,	req.body.title+extension);
	}
  });

  const upload = multer({ storage: storage });





const Student = require("./models/Student");
const Event = require("./models/Event");
const Art = require("./models/Art");
const Course = require("./models/Course");
const Quiz =require("./models/Quiz");
const Dad =require("./models/Dad");
const Match =require("./models/Match");
const Exam =require("./models/Exam");











// io.on('connection', (socket) => {
// 	console.log('A user connected');
// 	socket.emit("on","hani jit")
//     socket.on("msg",(msg) => {
// 		console.log(msg);
// 	})

// 	// app.get("/test" , async (req,res) => {
// 	// 	socket.emit("almost", "hahi jaya");
// 	// 	let sok=req.query;   
// 	// 	sok.date={year:"1222",month:"mar",time:"12:12"};
// 	// 	sok.status="not seen"
// 	// 	const incident = new Incedent(sok);
// 	// 	const result = await incident.save();
// 	// 	console.log(sok);
// 	// 	res.send("hih");
// 	// 	})
		

// 	socket.on('disconnect', () => {
// 		console.log('A user disconnected');
// 		});
// 	});
	


  
  
  
  
  

  

app.get('/login', async (req, res) => {
	try {
		const result = await Student.findOne({_id:req.query.username+req.query.password},{_id:0});
		if (result){
		
		res.json(result);

		// }
		}else{
		res.json({fullname:"no"});	

		}
		
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
	});

	app.get('/create', async (req, res) => {
		try {
		const newStudent = new Student(req.query);  
		newStudent.save().then(() => {
			res.json({inserted:"yes"});	
		}).catch((error) => {
		    res.json({inserted:"no"});	
		  });
			
		} catch (err) {
			console.error(err);
			res.status(500).send('Internal Server Error');
		}
		});

app.get('/getStudents', async (req, res) => {
	try {
		const result = await Student.find({});
		if (result){
		
		res.json(result);

		// }
		}else{
		res.json({fullname:"no"});	

		}
		
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
	});
app.get('/addStudent', async (req, res) => {
		const newStudent = new Student(req.query);
		  
		  newStudent.save().then(() => {
			res.json({inserted:"yes"});	
		}).catch((error) => {
		    res.json({inserted:"no"});	
		  });
		
	});

	app.get('/addWithFile', async (req, res) => {
		// const newStudent = new Student(req.query);
		  
		//   newStudent.save().then(() => {
		// 	res.json({inserted:"yes"});	
		// }).catch((error) => {
		//     res.json({inserted:"no"});	
		//   });
		console.log(req.query);
		res.json({inserted:"yes"});
		
	});
app.get('/deleteStudent', async (req, res) => {
	console.log(req.query);
	if (req.query){
	Student.deleteOne(req.query).then(() => { 
		  res.json({deleted:"yes"});})
		.catch((error) => { 
		  res.json({deleted:"no"}); 
	});
}
	
});



app.get('/getEvents', async (req, res) => {
	try {
		const result = await Event.find({});
		if (result){
		
		res.json(result);

		// }
		}else{
		res.json({event:"no"});	

		}
		
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
	});

app.get('/addEvent', async (req, res) => {
	const newEvent = new Event(req.query);
		
	newEvent.save().then(() => {
		res.json({inserted:"yes"});	
	}).catch((error) => {
		res.json({inserted:"no"});	
		});
	
	
});

app.get('/mark', async (req, res) => {
	console.log(req.query);
	await Event.updateOne({ _id: req.query._id }, { $set: { status: req.query.status } })
  .then(async result => {
	await Event.find({})
	.then(result2 =>{
	res.json(result);

	})
	.catch(err2=>{
		res.json({event:"no"});	

	})	
}) 
	.catch(error => {
	res.json({updated:"no"});
})  	
});



app.get('/addArt', async (req, res) => {
	const newArt = new Art(req.query);
		
	newArt.save().then(() => {
		res.json({inserted:"yes"});	
	}).catch((error) => {
		res.json({inserted:"no"});	
		});

	

});

app.get('/getArts', async (req, res) => {
	try {
		const result = await Art.find({});
		if (result){
		res.json(result);
		}else{
		res.json({art:"no"});	
		}
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
	});

	app.post('/addCourse', upload.single('file'),async (req, res) => {
		console.log(req.body.art);
		console.log(req.body.title);
		console.log(req.file);
		// const course = new Course({title:req.body.title,art:req.body.title,file:req.file.buffer});
		
		// await course.save().then(() => {
		// 	res.json({inserted:"yes"});	
		// }).catch((error) => {
		// 	res.json({inserted:"no"});	
		// 	});		
	  });


app.post('/upload', upload.single('file'),async (req, res) => {
const course = new Course({title:req.body.title,art:req.body.art,path:req.file.filename});

await course.save().then(() => {
	res.json({inserted:"yes"});	
}).catch((error) => {
	res.json({inserted:"no"});	
	});		 
});


app.get("/getCourses", (req, res) => {
	Course.find({}, (err, course) => {
		if (err) {
		console.log(err);
		res.sendStatus(500);
		} else {
		res.send(course);
		}
	});
	});
			 
app.get("/deleteCourse",async (req, res) => {
	const course = await Course.findOne(req.query);
  if (course) {
    const path = 'uploads/' + course.path;
    fs.unlink(path, (err) => {
      if (err) {
        console.error(err);
        res.json({deleted:"no"}); 
      } else {
        Course.deleteOne(req.query).then(() => { 
          res.json({deleted:"yes"});})
        .catch((error) => { 
          res.json({deleted:"no"}); 
        });	
      }
    });
  } else {
    res.json({deleted:"no"});
  }
	
	});


app.get("/addExam",async(req, res) => {
	const exam = new Exam(req.query.exam);
		
	await exam.save().then(() => {
		req.query.questions.map(q => {
			if(q.type=="quiz"){
				const quiz = new Quiz(q);
				quiz.save();
			}else if(q.type=="dad"){
				const dad = new Dad(q);
				dad.save();
			}else if(q.type=="match"){
				const match = new Match(q);
				match.save();
			}else if(q.type=="tr"){
				console.log("tr");
			}

	})
		
	res.json({inserted:"yes"});	

	}).catch((error) => {
		res.json({inserted:"no"});	
	});	
	});
		
	app.get("/getExams",async (req, res) => {
		try {
			const result = await Exam.find({});
			if (result){
			
			res.json(result);
	
			// }
			}else{
			res.json({exams:"no"});	
	
			}
			
		} catch (err) {
			console.error(err);
			res.status(500).send('Internal Server Error');
		}
		});
	  
app.get("/getQuestions",async (req, res) => {
	try {
		const result = await Dad.find({});
		if (result){
		
		res.json(result);

		// }
		}else{
		res.json({exams:"no"});	

		}
		
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
	});
		  
	
	
	
	

app.use('/courses', express.static('uploads'));



 


server.listen(4000, () => {
	console.log("server is running on 4000");
});
