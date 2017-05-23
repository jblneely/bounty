//DOUGNUT CHART
// var ctx;
// var aims = [5, 6];

// console.log(aims);

// Chart.pluginService.register({
//     beforeDraw: function(chart) {
//         var width = chart.chart.width,
//             height = chart.chart.height,
//             ctx = chart.chart.ctx,
//             type = chart.config.type;

//         if (type == 'doughnut') {
//             var percent = Math.round((chart.config.data.datasets[0].data[0] * 100) /
//                 (chart.config.data.datasets[0].data[0] +
//                     chart.config.data.datasets[0].data[1]));
//             var oldFill = ctx.fillStyle;
//             var fontSize = ((height - chart.chartArea.top) / 100).toFixed(2);

//             ctx.restore();
//             ctx.font = fontSize + "em sans-serif";
//             ctx.textBaseline = "middle";

//             var text = percent + "%",
//                 textX = Math.round((width - ctx.measureText(text).width) / 2),
//                 textY = (height + chart.chartArea.top) / 2;

//             ctx.fillStyle = chart.config.data.datasets[0].backgroundColor[0];
//             ctx.fillText(text, textX, textY);
//             ctx.fillStyle = oldFill;
//             ctx.save();
//         }
//     }
// });

// aims.forEach(function(aim) {
//     aim.fires.forEach(function(fire) {
//         ctx = document.getElementById("myDougnutChart" + fire.id).getContext('2d');
//         var myDougnutChart = new Chart(ctx, {
//             type: 'doughnut',
//             data: {
//                 labels: ["Current", "Goal"],
//                 datasets: [{
//                     backgroundColor: [
//                         'rgba(255, 99, 132, 0.2)',
//                         'rgba(54, 162, 235, 0.2)'
//                     ],
//                     data: [fire.current, fire.goal - fire.current]
//                 }]
//             }
//         });
//     });
// });


//LINE CHART
var ctx = document.getElementById('myLineChart').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
            label: 'Steve',
            data: [12, 19, 3, 17, 6, 3, 7],
            backgroundColor: "rgba(153,255,51,0.6)"
        }, {
            label: 'Bowman',
            data: [2, 29, 5, 5, 2, 3, 10],
            backgroundColor: "rgba(255,153,0,0.6)"
        }]
    }
});
