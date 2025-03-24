
// https://api.coingecko.com/api/v3/search?query=dog

const inputBox = document.getElementById("inputBox");
const infoContainer = document.getElementById("info-container");
// console.log(inputBox,infoContainer);

function moreInfoClick (id){
  window.location.href = `details.html?id=${id}`;
}
const searchForm = document.getElementById("searchForm");
// console.log(searchForm); 
//for emty container sothat value add from index 1
infoContainer.innerHTML = "";
searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    //  console.log(inputBox.value);
    //show the loader

    const loader = document.getElementById("loader");
    loader.style.display = "block";

    const res = await fetch(`https://api.coingecko.com/api/v3/search?query=${inputBox.value}`);
    const data = await res.json();
    // console.log(data);

    //hide loader after api call
    loader.style.display = "none";

    

    data.coins.forEach((coin, index) => {
        const coinCard = document.createElement("div");
        coinCard.classList.add("coin-card");
        coinCard.innerHTML = `
              <span>${index + 1}</span>
                <img src="${coin.thumb}" src="dog">
                    <h3>${coin.name}</h3>
                    <h3>${coin.symbol}</h3>
              <button onclick="moreInfoClick('${coin.id}')" id="moreInfoBtn">More Info</button>
    `;
     //  <button id="moreInfoBtn">More Info</button>
    infoContainer.appendChild(coinCard);

    });



});