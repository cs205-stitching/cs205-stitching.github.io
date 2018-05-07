var trace1 = {
    x: ['480P', '720P', '1080P'],
    y: [0.162, 0.420, 0.954],
    type: 'bar',
    name: 'Keypoint detection',
    colorscale: 'YIGnBu'
};

var trace2 = {
    x: ['480P', '720P', '1080P'],
    y: [0.067, 0.141, 0.226],
    type: 'bar',
    name: 'Keypoint description',
    colorscale: 'YIGnBu'
};

var trace3 = {
    x: ['480P', '720P', '1080P'],
    y: [0.007, 0.030, 0.070],
    type: 'bar',
    name: 'Keypoint matching',
    colorscale: 'YIGnBu'
};

var trace4 = {
    x: ['480P', '720P', '1080P'],
    y: [0.005, 0.007, 0.046],
    type: 'bar',
    name: 'Homography',
    colorscale: 'YIGnBu'
};

var trace5 = {
    x: ['480P', '720P', '1080P'],
    y: [0.026, 0.064, 0.153],
    type: 'bar',
    name: 'Warping',
    colorscale: 'YIGnBu'
};

var trace6 = {
    x: ['480P', '720P', '1080P'],
    y: [0.001, 0.002, 0.014],
    type: 'bar',
    name: 'Stitching',
    colorscale: 'YIGnBu'
};

var data = [trace6, trace5, trace4, trace3, trace2, trace1];

var layout = {
    barmode: 'stack',
    xaxis: {
        title: 'Video resolution'
    },
    yaxis: {
        title: 'Average time per frame'
    }
};

Plotly.newPlot('seq-time', data, layout);







var trace1 = {
    x: ['480P', '720P', '1080P'],
    y: [0.162/0.016, 0.420/0.033, 0.954/0.073],
    type: 'line',
    name: 'Keypoint detection'
};

var trace2 = {
    x: ['480P', '720P', '1080P'],
    y: [0.067/0.02, 0.141/0.024, 0.226/0.03],
    type: 'line',
    name: 'Keypoint description'
};

var trace3 = {
    x: ['480P', '720P', '1080P'],
    y: [0.007/0.003, 0.030/0.004, 0.070/0.009],
    type: 'line',
    name: 'Keypoint matching'
};

var trace4 = {
    x: ['480P', '720P', '1080P'],
    y: [0.005/0.003, 0.007/0.006, 0.046/0.024],
    type: 'line',
    name: 'Homography'
};

var trace5 = {
    x: ['480P', '720P', '1080P'],
    y: [0.026/0.005, 0.064/0.011, 0.153/0.026],
    type: 'line',
    name: 'Warping'
};

var trace6 = {
    x: ['480P', '720P', '1080P'],
    y: [0.001/0.002, 0.002/0.0025, 0.014/0.007],
    type: 'line',
    name: 'Stitching'
};

var data = [trace6, trace5, trace4, trace3, trace2, trace1];

var layout = {
    xaxis: {
        title: 'Video resolution'
    },
    yaxis: {
        title: 'Speedup against sequential version'
    }
};

Plotly.newPlot('acc-tesla-speedup', data, layout);





var trace1 = {
    x: ['480P', '720P', '1080P'],
    y: [0.162/0.011, 0.420/0.027, 0.954/0.061],
    type: 'line',
    name: 'Keypoint detection'
};

var trace2 = {
    x: ['480P', '720P', '1080P'],
    y: [0.067/0.01, 0.141/0.014, 0.226/0.018],
    type: 'line',
    name: 'Keypoint description'
};

var trace3 = {
    x: ['480P', '720P', '1080P'],
    y: [0.007/0.0007, 0.030/0.003, 0.070/0.006],
    type: 'line',
    name: 'Keypoint matching'
};

var trace4 = {
    x: ['480P', '720P', '1080P'],
    y: [0.005/0.009, 0.007/0.009, 0.046/0.034],
    type: 'line',
    name: 'Homography'
};

var trace5 = {
    x: ['480P', '720P', '1080P'],
    y: [0.026/0.003, 0.064/0.008, 0.153/0.023],
    type: 'line',
    name: 'Warping'
};

var trace6 = {
    x: ['480P', '720P', '1080P'],
    y: [0.001/0.0007, 0.002/0.001, 0.014/0.013],
    type: 'line',
    name: 'Stitching'
};

var data = [trace6, trace5, trace4, trace3, trace2, trace1];

var layout = {
    xaxis: {
        title: 'Video resolution'
    },
    yaxis: {
        title: 'Speedup against sequential version'
    }
};

Plotly.newPlot('acc-gtx-speedup', data, layout);





var trace1 = {
    x: ['480P', '720P', '1080P'],
    y: [3.3, 1.4, 0.7],
    type: 'line',
    name: 'Serial'
};

var trace2 = {
    x: ['480P', '720P', '1080P'],
    y: [18, 8, 3.74],
    type: 'line',
    name: 'OpenACC (Tesla M60)'
};

var trace3 = {
    x: ['480P', '720P', '1080P'],
    y: [20, 9, 3.8],
    type: 'line',
    name: 'OpenACC (GeForce GTX 1070)'
};




var data = [trace1, trace2, trace3];

var layout = {
    xaxis: {
        title: 'Video resolution'
    },
    yaxis: {
        title: 'Frames per second (FPS)'
    }
};

Plotly.newPlot('fps-comparison', data, layout);