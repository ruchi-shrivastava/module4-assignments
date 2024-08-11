
let containerVar = document.getElementById("container");
let ratingContainerVar = document.querySelectorAll(".rating");
let buttonVar = document.getElementById("btn");
console.log(containerVar,ratingContainerVar,btn);


//Handling Click Events on Rating Elements
// i am using for loop for understanding purpose

//for (let i = 0; i < ratingContainerVar.length; i++) {
    //ratingContainerVar[i].addEventListener("click", function(event) {
      //  removeActive();
       // selectedRating = event.target.innerText || event.target.parentNode.innerText;
      //  event.target.parentNode.classList.add("active");
   // });
//}



let selectedRating = "";

ratingContainerVar.forEach((ratingContainer) => {
    ratingContainer.addEventListener("click",(event) =>{
        removeActive();
       selectedRating = event.target.innerText || event.target.parentNode.innerText;
       event.target.parentNode.classList.add("active");
    })
}) 


buttonVar.addEventListener("click", () => {
 if(selectedRating !== ""){
    containerVar.innerHTML = `
    <strong>Thank You!</strong>
    <br>
    <br>
    <strong>Feedback : ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
    `;
 }

});

function removeActive(){
    ratingContainerVar.forEach((ratingContainer) => {
        ratingContainer.classList.remove("active");
    });
}

