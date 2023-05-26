
let ulElement = document.querySelector("ul");

for ( i = 0 ; i < 10 ; i++){
    const liElement = createElement();
    
    liElement.addEventListener ( "click", function() {
        liElement.classList.toggle("barred");
    });

    ulElement.appendChild(liElement);
}

function createElement(){
    const liElement = document.createElement("li");
    liElement.classList.add();
    liElement.innerHTML = "Elemento della spesa";
    
    return liElement;
}