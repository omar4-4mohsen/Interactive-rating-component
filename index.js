subButton = document.getElementById("submit");
rating = document.getElementsByClassName("rating")[0];
thankYou = document.getElementsByClassName("thank-you")[0];
spanValue = document.getElementById("selected-rating");

buttons = document.getElementsByClassName("rating-button");


subButton.addEventListener("click", function () {
    rating.style.display = "none";

    thankYou.style.display = "flex";

});


for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        // Toggle the selected class on the clicked button
        this.classList.toggle("selected"); 
        selected = this.value;
        console.log(selected);            
        spanValue.innerHTML = selected;


        for (var j = 0; j < buttons.length; j++) {
            if (buttons[j] !== this) {
                buttons[j].classList.remove("selected");
            }
        }
    });
};


