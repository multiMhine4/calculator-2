let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("mousedown", (e) => {
        e.target.classList.toggle("pressed");    
    });
    button.addEventListener("mouseup", (e) => {
        e.target.classList.toggle("pressed");    
    });
});
