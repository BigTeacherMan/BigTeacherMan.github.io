console.log("Hello World!");

const randmGif = document.getElementById("rickandmorty");


function changeText() {
   document.getElementById("button").innerHTML = "<h1>HEADING</h1>";
   document.getElementById("button").style.backgroundColor = "rgb(0, 210, 150)";
}


function changeColor(elementID, color) {
    const element = document.getElementById(elementID);

    if (element && element.id === "button") {
        alert("This worked!")
    }

    element.style.color = color;
}



function checkAndChangeStyle(elementId) {
    const element = document.getElementById(elementId);

    if (element && element.id === "background") {
        if (element.style.backgroundColor === "blue") {
            element.style.backgroundColor = 'red';
            alert("Background color changed to red!");
          } 
        else if (element.style.backgroundColor === "red") {
            element.style.backgroundColor = 'green';
            alert("Background color changed to green!");
          }
        else if (element.style.backgroundColor === "green") {
            element.style.backgroundColor = "yellow";
        }
        else {
            element.style.backgroundColor = 'blue';
            alert("Background color changed to blue!");
          }
        }
  }