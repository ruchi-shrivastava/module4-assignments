const getTrendingCoins = async() => {
const response= await fetch("https://api.coingecko.com/api/v3/search/trending");
const data = await response.json();
console.log(data);

const cardContainer = document.getElementById("card-container");
data.coins.forEach(coinData => {
    const coinLogo = coinData.item.small;
    const coinName = coinData.item.name;
    const coinSymbol = coinData.item.symbol;
    const priceInINR = coinData.item.data.price;


  


const currencyCard = `

            <img src="${coinLogo}" alt="cat-logo" >
            <div class="wrap">
            <h3>${coinName}(${coinSymbol}) </h3>
            <span>₹${priceInINR.toFixed(4)}</span>
            </div>
         `;
         const currencyCardNode = document.createElement("div");
         console.log(currencyCardNode);
         currencyCardNode.classList.add("crypto-card");
         currencyCardNode.innerHTML = currencyCard;
         cardContainer.appendChild(currencyCardNode);
});

};

getTrendingCoins();