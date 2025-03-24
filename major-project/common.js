const searchBtn = document.getElementById("btn");
console.log(searchBtn);
searchBtn.addEventListener("click",()=>{
    window.location.href = "search.html";
});

const logoImg = document.getElementById("logoImg");
console.log(logoImg);
logoImg.addEventListener("click",()=> {
    window.location.href = "index.html"
});