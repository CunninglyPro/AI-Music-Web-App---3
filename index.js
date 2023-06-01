var minecraft = "";
var harry_potter = "";

var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;

function preload() {
    minecraft = loadSound('Minecraft.mp3');
    harry_potter = loadSound('Harry Potter Theme Song.mp3');
}

function setup() {
    canvas = createCanvas(450, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 500, 500);
}

function modelLoaded() {
    console.log("Model is loaded!");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}