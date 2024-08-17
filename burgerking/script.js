document.addEventListener('DOMContentLoaded', function() {

const btn = document.querySelector('#btn');
const inputArr = document.querySelectorAll('input[type="checkbox"]'); // Ensure to select only checkboxes

let burgerImgContainer = document.getElementById("burgerImgContainer");
let friesImgContainer = document.getElementById("friesImgContainer");
let colddrinkImgContainer = document.getElementById("colddrinkImgContainer");
let orderIdDisplay = document.getElementById("orderIdDisplay"); // Ensure this element exists


const allOrders = [];
let orderId = 1; // Ensure this is declared outside any function to be globally accessible

async function prepareOrder(currentOrder, orderId) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve({ id: orderId, preparedOrder: currentOrder });
        }, orderId * 1000);
    });
}

btn.addEventListener('click', async function() {
    const currentOrder = [];
    inputArr.forEach(food => {
        if (food.checked) {
            currentOrder.push(food.value);
        }
    });

    if (currentOrder.length === 0) {
        alert('Please select at least one item.');
        return;
    }

    console.log('Your order ID is: ' + orderId);
    try {
        const { id, preparedOrder } = await prepareOrder(currentOrder, orderId++);
        console.log('Order with ID: ' + id + ' is prepared');
        console.log('Items you ordered: ', preparedOrder);
    
        //display order number
        if (orderIdDisplay) {
            orderIdDisplay.textContent = 'Your Order ID: ' + id;
        }else {
            console.error('orderIdDisplay is not found in the DOM.');
        }

        // Show images based on the order
        showImages(preparedOrder);
    } catch (error) {
        console.error('Error preparing the order:', error);
    }
});

function showImages(order) {
    // Check if containers exist
    if (burgerImgContainer) {
        burgerImgContainer.innerHTML = '';
    }
    if (friesImgContainer) {
        friesImgContainer.innerHTML = '';
    }
    if (colddrinkImgContainer) {
        colddrinkImgContainer.innerHTML = '';
    }

    // Display images based on the order
    order.forEach(item => {
        if (item === 'burger' && burgerImgContainer) {
            let img = document.createElement('img');
            img.src = "https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg";
            img.style.width = "100px";
            img.style.height = "100px";
            burgerImgContainer.appendChild(img);
        }
        if (item === 'fries' && friesImgContainer) {
            let img = document.createElement('img');
            img.src = "https://static01.nyt.com/images/2013/09/24/business/Fries/Fries-superJumbo.jpg";
            img.style.width = "100px";
            img.style.height = "100px";
            friesImgContainer.appendChild(img);
        }
        if (item === 'coldDrink' && colddrinkImgContainer) {
            let img = document.createElement('img');
            img.src = "https://c8.alamy.com/comp/C71C6X/classic-glass-of-coca-cola-united-states-of-america-C71C6X.jpg";
            img.style.width = "100px";
            img.style.height = "100px";
            colddrinkImgContainer.appendChild(img);
        }
    });
}

});