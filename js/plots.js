var trace1 = {
    x: ['480P', '720P', '1080P'],
    y: [0.255, 0.565, 1.299],
    type: 'bar',
    name: 'Keypoint detection',
    colorscale: 'YIGnBu'
};

var trace2 = {
    x: ['480P', '720P', '1080P'],
    y: [0.187, 0.239, 0.347],
    type: 'bar',
    name: 'Keypoint description',
    colorscale: 'YIGnBu'
};

var trace3 = {
    x: ['480P', '720P', '1080P'],
    y: [0.025, 0.040, 0.081],
    type: 'bar',
    name: 'Keypoint matching',
    colorscale: 'YIGnBu'
};

var trace4 = {
    x: ['480P', '720P', '1080P'],
    y: [0.005, 0.007, 0.034],
    type: 'bar',
    name: 'Homography',
    colorscale: 'YIGnBu'
};

var trace5 = {
    x: ['480P', '720P', '1080P'],
    y: [0.051, 0.115, 0.261],
    type: 'bar',
    name: 'Warping',
    colorscale: 'YIGnBu'
};

var trace6 = {
    x: ['480P', '720P', '1080P'],
    y: [0.001, 0.004, 0.007],
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
    },
    title: 'Execution Time of Different Stages in Serial Version'
};

Plotly.newPlot('seq-time', data, layout);



var trace1 = {
    x: ['480P', '720P', '1080P'],
    y: [0.255/0.064, 0.565/0.129, 1.299/0.229],
    type: 'line',
    name: 'Keypoint detection',
};

var trace2 = {
    x: ['480P', '720P', '1080P'],
    y: [0.187/0.272, 0.239/0.502, 0.347/0.928],
    type: 'line',
    name: 'Keypoint description'
};

var trace3 = {
    x: ['480P', '720P', '1080P'],
    y: [0.025/0.017, 0.040/0.021, 0.081/0.031],
    type: 'line',
    name: 'Keypoint matching'
};

var trace4 = {
    x: ['480P', '720P', '1080P'],
    y: [0.005/0.001, 0.007/0.003, 0.034/0.008],
    type: 'line',
    name: 'Homography'
};

var trace5 = {
    x: ['480P', '720P', '1080P'],
    y: [0.051/0.010, 0.115/0.024, 0.261/0.057],
    type: 'line',
    name: 'Warping'
};

var trace6 = {
    x: ['480P', '720P', '1080P'],
    y: [0.001/0.001, 0.004/0.004, 0.007/0.007],
    type: 'line',
    name: 'Stitching'
};

var data = [trace6, trace5, trace4, trace3, trace2, trace1];

var layout = {
    xaxis: {
        title: 'Video resolution'
    },
    yaxis: {
        title: 'Speedup against serial version'
    },
    title: 'Speedup of Different Stages of OpenMP Version'
};

Plotly.newPlot('omp-speedup', data, layout);






var trace1 = {
    x: ['480P', '720P', '1080P'],
    y: [0.255/0.016, 0.565/0.033, 1.299/0.073],
    type: 'line',
    name: 'Keypoint detection'
};

var trace2 = {
    x: ['480P', '720P', '1080P'],
    y: [0.187/0.02, 0.239/0.024, 0.347/0.03],
    type: 'line',
    name: 'Keypoint description'
};

var trace3 = {
    x: ['480P', '720P', '1080P'],
    y: [0.025/0.003, 0.040/0.004, 0.081/0.009],
    type: 'line',
    name: 'Keypoint matching'
};

var trace4 = {
    x: ['480P', '720P', '1080P'],
    y: [0.005/0.003, 0.007/0.006, 0.034/0.024],
    type: 'line',
    name: 'Homography'
};

var trace5 = {
    x: ['480P', '720P', '1080P'],
    y: [0.051/0.005, 0.115/0.011, 0.261/0.026],
    type: 'line',
    name: 'Warping'
};

var trace6 = {
    x: ['480P', '720P', '1080P'],
    y: [0.001/0.002, 0.004/0.0025, 0.007/0.007],
    type: 'line',
    name: 'Stitching'
};

var data = [trace6, trace5, trace4, trace3, trace2, trace1];

var layout = {
    xaxis: {
        title: 'Video resolution'
    },
    yaxis: {
        title: 'Speedup against serial version'
    },
    title: 'Speedup of Different Stages of OpenACC Version (Tesla M60)'
};

Plotly.newPlot('acc-tesla-speedup', data, layout);





var trace1 = {
    x: ['480P', '720P', '1080P'],
    y: [0.255/0.011, 0.565/0.027, 1.299/0.061],
    type: 'line',
    name: 'Keypoint detection'
};

var trace2 = {
    x: ['480P', '720P', '1080P'],
    y: [0.187/0.01, 0.239/0.014, 0.347/0.018],
    type: 'line',
    name: 'Keypoint description'
};

var trace3 = {
    x: ['480P', '720P', '1080P'],
    y: [0.025/0.0007, 0.040/0.003, 0.081/0.006],
    type: 'line',
    name: 'Keypoint matching'
};

var trace4 = {
    x: ['480P', '720P', '1080P'],
    y: [0.005/0.009, 0.007/0.009, 0.034/0.034],
    type: 'line',
    name: 'Homography'
};

var trace5 = {
    x: ['480P', '720P', '1080P'],
    y: [0.051/0.003, 0.115/0.008, 0.261/0.023],
    type: 'line',
    name: 'Warping'
};

var trace6 = {
    x: ['480P', '720P', '1080P'],
    y: [0.001/0.0007, 0.004/0.001, 0.007/0.013],
    type: 'line',
    name: 'Stitching'
};

var data = [trace6, trace5, trace4, trace3, trace2, trace1];

var layout = {
    xaxis: {
        title: 'Video resolution'
    },
    yaxis: {
        title: 'Speedup against serial version'
    },
    title: 'Speedup of Different Stages of OpenACC Version (GTX 1080)'
};

Plotly.newPlot('acc-gtx-speedup', data, layout);





var trace1 = {
    x: ['480P', '720P', '1080P'],
    y: [1.7, 1, 0.5],
    type: 'line',
    name: 'Serial'
};

var trace2 = {
    x: ['480P', '720P', '1080P'],
    y: [2.5, 1.4, 0.7],
    type: 'line',
    name: 'OpenMP'
};

var trace3 = {
    x: ['480P', '720P', '1080P'],
    y: [18, 8, 3.74],
    type: 'line',
    name: 'OpenACC (Tesla M60)'
};

var trace4 = {
    x: ['480P', '720P', '1080P'],
    y: [20, 9, 3.8],
    type: 'line',
    name: 'OpenACC (GeForce GTX 1070)'
};

var trace5 = {
    x: ['480P', '720P', '1080P'],
    y: [35, 14, 5],
    type: 'line',
    name: 'OpenACC with pipeline'
};




var data = [trace1, trace2, trace3, trace4, trace5];

var layout = {
    xaxis: {
        title: 'Video resolution'
    },
    yaxis: {
        title: 'Frames per second (FPS)'
    },
    title: "FPS Comparison of Different Parallel Versions"
};

Plotly.newPlot('fps-comparison', data, layout);




var trace1 = {
    x: ['Keypoint detection', 'Keypoint description', 'Keypoint matching', 'Homography', 'Warping', 'Stitching', 'Total'],
    y: [4.4, 0.5, 1.9, 2.3, 4.8, 1, 1.4],
    type: 'bar',
    name: 'OpenMP'
};

var trace2 = {
    x: ['Keypoint detection', 'Keypoint description', 'Keypoint matching', 'Homography', 'Warping', 'Stitching', 'Total'],
    y: [17.1, 10.0, 10.0, 1.2, 10.5, 1.6, 8.0],
    type: 'bar',
    name: 'OpenACC (Tesla M60)'
};

var trace3 = {
    x: ['Keypoint detection', 'Keypoint description', 'Keypoint matching', 'Homography', 'Warping', 'Stitching', 'Total'],
    y: [20.9, 17.1, 13.3, 0.8, 14.4, 4.0, 9.0],
    type: 'bar',
    name: 'OpenACC (GeForce GTX 1070)'
};



var data = [trace1, trace2, trace3];

var layout = {
    barmode: 'group',
    yaxis: {
        title: 'Speedup against serial version'
    },
    title: "Speedup Comparison of Different Parallel Versions"
};

Plotly.newPlot('speedup-comparison', data, layout);