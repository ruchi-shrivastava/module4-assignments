const circle = document.getElementById('circle');
const colorButton = document.getElementById('changeColor');
const shape = document.getElementById('shape');
const shapeButton = document.getElementById('changeShape')
console.log(circle,colorButton,shape,shapeButton);

//function to change color randomly
// function changeColor(element){
//     const colors =["red", "green", "blue", "yellow", "purple", "orange"];
//     const randomColor = colors[Math.floor(Math.random()*colors.length)];
//     element.style.backgroundColor = randomColor;
// }

 // Function to generate a random RGB color
 function generateColor() {
            return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        }

        // Function to change the color of the circle
        function changeColor() {
            circle.style.backgroundColor = generateColor();
        }

//function to change shape
function Shape(){
    const shapes = ["square", "triangle", "diamond","circle","left-arrow","right-arrow","close"];
    // Remove all shape classes
    shape.className = "shape";
    //add a new random shape class
    const randomShape = shapes[Math.floor(Math.random()* shapes.length)];
    shape.classList.add(randomShape)
}

//add event listener

colorButton.addEventListener('click',function(){
changeColor(circle);
})
// changeShape.addEventListener('click', Shape);
changeShape.addEventListener('click',function(){
    //shape function called
    Shape(shape);
})

