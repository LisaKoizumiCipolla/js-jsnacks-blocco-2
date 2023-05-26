
const ingredientButton = document.getElementById("ingredient-button");
const recipeButton = document.getElementById("recipe-button");

const ulListElement = document.querySelector("ul");

const ingredientList = [];

let recipeGenerated = false;
let ingredientsCounter = 0;

ingredientButton.addEventListener("click",
function() 
{
    if (!recipeGenerated){
        const ingredientElement = document.querySelector("input");
        console.log(ingredientElement);
        ingredientList.push(ingredientElement.value);
        ulListElement.innerHTML += "<li>" + ingredientElement.value + "</i>";

        ingredientElement.value = "";

        ingredientsCounter= ingredientsCounter + 1;
    }
})



recipeButton.addEventListener("click", 
function(){

    if (ingredientsCounter >= 2){
        
    document.querySelector("div.random-img").innerHTML = '<img src="https://picsum.photos/seed/picsum/200/300" alt="new-img">';
    recipeGenerated = true;
    }



    
}, {once: ingredientsCounter >= 0})