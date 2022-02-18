nx=0;
ny=0;
lwx=0;
rwx=0;
diff=0;


function preload(){

}

function setup(){
video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(550,500);
canvas.position(560, 150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){
background('grey');
textSize(diff);
text("Hi!",nx,ny);
}

function modelLoaded(){
console.log("model is loaded");
}

function gotPoses(result){
if(result.length > 0){
    console.log(result);
    nx= result[0].pose.nose.x;
    ny= result[0].pose.nose.y;

    lwx=  result[0].pose.leftWrist.x;
    rwx=  result[0].pose.rightWrist.x;
    diff= floor(lwx-rwx);

    document.getElementById('why').innerHTML = diff + " px";
}
}

