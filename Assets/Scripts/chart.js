// Load library
google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

async function loadStats () {
    // Fetch data from URL
    const response = await fetch('https://leetcode-stats-api.herokuapp.com/Azpect3120');
    const data = await response.json();

    // [easySolved, mediumSolved, hardSolved]
    drawChart([data.easySolved, data.mediumSolved, data.hardSolved]);

}






function drawChart (dataArr) {
    // Data from fetch
    const arr = dataArr;

    
    const data = google.visualization.arrayToDataTable([
        ['Difficulty', 'Solved', {role: 'style'}],
        ['Easy', arr[0], 'green'],
        ['Medium', arr[1], 'yellow'],
        ['Hard', arr[2], 'red'],
    ]);
    

    // Chart options
    const options = {
        backgroundColor: 'transparent',
        colors: ['#3dd44e', '#fec11e', '#e5253c'],
        legend: 'none',
        chartArea: {width: '100%', height: '100%'},
        pieSliceText: 'value',
        pieChartBorderColor: 'transparent',
        scale: 3,
    }

    // Draw chart
    const chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

    

loadStats();