var button = document.querySelector(".show-cat");
console.log(button);

var cat = document.querySelector(".cat");
console.log(cat);

var test = "it's working";

button.addEventListener("click", function(){
    cat.classList.add("show");
});