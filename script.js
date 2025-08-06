const displayDiv = document.querySelector("#display");

const displayManager = {
    // Adds thousands separator to numbers (2000 to 2,000)
    format: function(numStr) {
        let list = numStr.split("");
        let index = numStr.length;
        while (index-3 > 0) {
            list.splice(index-3, 0, ",");
            index -= 3;
        }
        return list.join("");
    },

    show: function(numStr) {
        displayDiv.innerText = this.format(numStr);
    },

    clear: function() {
        displayDiv.innerText = "";
    }
}

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("mousedown", (e) => {
        e.target.classList.toggle("pressed");    
    });
    button.addEventListener("mouseup", (e) => {
        e.target.classList.toggle("pressed");    
    });
});
