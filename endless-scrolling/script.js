let apiKey = "5t_I1VT9xqsUfNoKAUaq7a3RbcU1jgzdy1yrjyzvDsw";
let count = 10;

let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

console.log(apiUrl);
let fetching = false;

async function getPhotos(){
    let response = await fetch(apiUrl);
    let data = await response.json();
    console.log(data);
    let box = document.querySelector(".box");

    data.forEach((photo) => {
        let img = document.createElement("img"); 
        img.src = photo.urls.regular;
        img.style.width = "300px";
        img.style.height = "500px";
        box.appendChild(img);
    });
   fetching = false;
}

getPhotos();

window.addEventListener("scroll",function(){
    let b = 100;
    if(
        !fetching && this.window.scrollY + this.window.innerHeight+100 >= this.document.body.offsetHeight
    ){
        getPhotos();
    }
});