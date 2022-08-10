function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 450);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , GotPoses);
}

function draw() {
    background('#03fce3');
}

function modelLoaded() {
    console.log('PoseNet is Initialized ');
}

function GotPoses(results){
    if (results.length > 0)
    {
        console.log(results);
    }
}

