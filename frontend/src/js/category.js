document.getElementById("start-quiz-btn").addEventListener("click", function() {
    this.style.backgroundColor = "#ffbf00"
});

document.addEventListener("DOMContentLoaded",()=>{
    const categoryButtons = document.querySelectorAll("#categories button")

    categoryButtons.forEach((button) => {
        button.addEventListener("click",()=>{
            categoryButtons.forEach((btn) =>{
                btn.style.backgroundColor = "#007bff"
                btn.style.color = "white"
                btn.style.fontSize = "16px"
            })

            button.style.backgroundColor = "#ffbf00"
            button.style.color = "black"
            button.style.fontSize = "18px"
        });
    });
});
categoryButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        categoryButtons.forEach((btn)=>btn.classList.remove("selected-category"))
        button.classList.add("selected-category")
    });
});
