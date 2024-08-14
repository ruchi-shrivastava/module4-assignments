let hour = document.getElementById("hour");
let minut = document.getElementById("minut");
let second = document.getElementById("second");
let ampm = document.getElementById("ampm");

function upDateClock() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();
    let ampmValue = "AM";

    if (currentHour >= 12) {
        ampmValue = "PM";
        if (currentHour > 12) {
            currentHour -= 12; // Convert to 12-hour format
        }
    } else if (currentHour === 0) {
        currentHour = 12; // Convert 0 (midnight) to 12
    }

    hour.innerHTML = (currentHour < 10 ? "0" : "") + currentHour;
    minut.innerHTML = (currentMinute < 10 ? "0" : "") + currentMinute;
    second.innerHTML = (currentSecond < 10 ? "0" : "") + currentSecond;
    ampm.innerHTML = ampmValue;
}

// Update the clock every second
setInterval(upDateClock, 1000);

// Call the function initially to set the clock immediately on page load
upDateClock();





// let hour = document.getElementById("hour");
// let minut = document.getElementById("minut");
// let second = document.getElementById("second");
// let ampm = document.getElementById("ampm");


// console.log(hour,minut,second);





    

// function upDateClock(){
//     if (hour >= 12) {
//         ampmValue ="PM";
//         if(currentHour)
//         hour = hour - 12;
//         ampm = "PM";
//       }

//     let currentTime = new Date();
    
//     hour.innerHTML = (currentTime.getHours() <10 ? "0" : "" )+ currentTime.getHours();
//     minut.innerHTML = (currentTime.getMinutes() <10 ? "0" : "" )+ currentTime.getMinutes();
//     second.innerHTML = (currentTime.getSeconds() <10 ? "0" : "" )+ currentTime.getSeconds();
//     ampm.innerHTML = ampmValue;
//     setInterval(() => {
//         upDateClock()
//         },1000)
//     }
//     upDateClock();
    