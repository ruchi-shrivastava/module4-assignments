// const ratingEls = document.querySelectorAll(".rating");
// const btnEl = document.getElementById("btn");

// const containerEl = document.getElementById("container");

// let selectedRating = "";

// ratingEls.forEach((ratingEl) => {
//   ratingEl.addEventListener("click", (event) => {
//     removeActive();
//     selectedRating =
//       event.target.innerText || event.target.parentNode.innerText;
//     event.target.classList.add("active");
//     event.target.parentNode.classList.add("active");
//   });
// });

// btnEl.addEventListener("click", () => {
//   if (selectedRating !== "") {
//     containerEl.innerHTML = `
//         <strong>Thank you!</strong>
//         <br>
//         <br>
//         <strong>Feedback: ${selectedRating}</strong>
//         <p>We'll use your feedback to improve our customer support.</p>
//         `;
//   }
// });

// function removeActive() {
//   ratingEls.forEach((ratingEl) => {
//     ratingEl.classList.remove("active");
//   });
// }

let containerVar = document.getElementById("container");
let ratingContainerVar = document.querySelectorAll(".rating");
let buttonVar = document.getElementById("btn");
console.log(containerVar,ratingContainerVar,btn);

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

