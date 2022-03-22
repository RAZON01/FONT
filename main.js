noseX = 0;
noseY = 0;
difference= 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.hide();

    canvas = createCanvas(550, 500);
    canvas.position(500, 100);

    poseNet = ml5.poseNet(video, modelLoaded());
    poseNet.on('pose', gotPoses);
    video.show();
}

function draw(){
}

function modelLoaded(){
    console.log("POSENET MODEL IS LOADED!!")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        rightWristX = results[0].pose.rightWrist.x;
        lefttWristX = results[0].pose.leftWrist.x;
        difference = floor(lefttWristX - rightWristX)
    }
}