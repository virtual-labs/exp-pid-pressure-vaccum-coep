
function pressureSensorGraph(sensorData1, i) {
    // Ensure we have a valid sensorData1 object
    let sensorData = JSON.parse(JSON.stringify(sensorData1));
    console.log(sensorData); // Check the data before proceeding

    // Ensure categories are correctly extracted
    const categories = sensorData.map(data => data.s1);
    console.log(categories); // Check categories before using them

    // Extracting data for each series
    const S1Data = sensorData.map(data => parseFloat(data.s1));
    const S2Data = sensorData.map(data => parseFloat(data.s2));
    const S3Data = sensorData.map(data => parseFloat(data.s3));
    const S4Data = sensorData.map(data => parseFloat(data.s4));
    const S5Data = sensorData.map(data => parseFloat(data.s5));
    const S6Data = sensorData.map(data => parseFloat(data.s6));
    const S7Data = sensorData.map(data => parseFloat(data.s7));
    const S8Data = sensorData.map(data => parseFloat(data.s8));
    const S9Data = sensorData.map(data => parseFloat(data.s9));

    // Check the extracted data arrays
    console.log(S1Data); 
    console.log(S2Data); 
    console.log(S3Data); 
    console.log(S4Data); 
    console.log(S5Data); 
    console.log(S6Data); 
    console.log(S7Data); 
    console.log(S8Data); 
    console.log(S9Data); 

    // Dynamically create the div ID for the graph
    const graphDiv = 'sensorGraphCold' + i;
    var TestCycleCount = parseInt(i + 1);

    const chart = Highcharts.chart(graphDiv, {
        credits: { enabled: false },
        chart: {
            type: 'line',
            backgroundColor: '#f4f4f4'
        },
        title: {
            text: 'READINGS TEST CYCLE - ' + (i + 1)
        },
        xAxis: {
            categories: categories,
            title: {
                text: 'S1(Bar)'
            }
        },
        yAxis: {
            title: {
                text: 'Pressure(Bar)'
            }
        },
        tooltip: {
            shared: true,
            crosshairs: true
        },
        series: [
            { name: 'S1', data: S1Data, color: '#FF6384' },
            { name: 'S2', data: S2Data, color: '#36A2EB' },
            { name: 'S3', data: S3Data, color: '#CC65FE' },
            { name: 'S4', data: S4Data, color: '#FFCE56' },
            { name: 'S5', data: S5Data, color: '#4BC0C0' },
            { name: 'S6', data: S6Data, color: '#000000' },
            { name: 'S7', data: S7Data, color: '#FA8072' },
            { name: 'S8', data: S8Data, color: '#000000' },
            { name: 'S9', data: S9Data, color: '#FA8072' }
        ]
    });

    // Handle checkbox toggle for series visibility
    $('.toggle-series').on('change', function () {
        const seriesIndex = $(this).data('series');
        const isVisible = $(this).is(':checked');
        chart.series[seriesIndex].setVisible(isVisible, false); // Toggle visibility
        chart.redraw(); // Redraw chart for better performance
    });
}
