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