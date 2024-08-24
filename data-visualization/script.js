const monthlyData = [56,78,89,98,67];
const months = ["January","February","March","April","May"];

//create chat
const ctx = document.getElementById("myChart").getContext('2d');
const myChart = new Chart(ctx,{
    type:'bar',
    data:{
        labels: months,
        datasets: [{
           label :'Monthly Sales',
           data: monthlyData,
           backgroundColor: 'rgba(75, 192, 192, 0.2)',
           borderColor: 'rgba(75, 192, 192, 1)',
           borderWidth:1,
           
        }]
    },
    options:{

        plugins: {
            title: {
                display: true,
                text: 'Monthly Sales Data '
            }
        },
       
         scales:{
            y:{
                beginAtZero:true
            }
        },
            Animation:{
                duration:1000,
            }
    
    }
})

// anime({
//     targets: '#animated-heading', // Target the h1 element
//     translateY: [-50, 0], // Move from -50px to 0px on the Y-axis
//     opacity: [0, 1], // Fade in from opacity 0 to 1
//     duration: 2000, // Duration of the animation in milliseconds
//     easing: 'easeOutExpo' // Easing function for a smooth effect
//   });

//   anime({
//     targets: '#animated-heading',
//     translateX: 250,
//     direction: 'alternate',
//     loop: true,
//     easing: 'linear'
//   });
anime({
    targets: '#animated-heading',
    translateY: [-50, 0],
    opacity: [0, 1],
    scale: [0.8, 1],
    rotate: '0turn',
    duration: 3000,
    easing: 'easeOutElastic(1, .8)',
    delay: 500, // Start after 500ms
    loop: true // Loop the animation
    
  });
