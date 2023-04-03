
{
const cntr = document.querySelectorAll('.counter_value');
const speed = 30; // The lower the slower

cntr.forEach(cntr_value => {
    const updateCount = () => {
        const target = +cntr_value.getAttribute('data-bs-target');
        const count = +cntr_value.innerText;
        const inc = target / speed;
        // Check if target is reached
        if (count < target) {
            // Add inc to count and output in cntr_value
            cntr_value.innerText = (count + inc).toFixed(0);
            // Call function every ms
            setTimeout(updateCount, 100);
        } else {
            cntr_value.innerText = target;
        }
    };
    updateCount();
});
}