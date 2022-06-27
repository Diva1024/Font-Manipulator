function preload(){

}



function setup(){
canvas= createCanvas(600,480);
canvas.position(800,150);
video=createCapture(VIDEO);
video.size(600,500);
poseNet=ml5.poseNet(video,modelloaded());
poseNet.on("pose",gotPoses);

}




function draw(){
background("#5a46db");
}
function modelloaded(){
    console.log("PoseNet is loaded");

}
function gotPoses(results){
if(results.length>0){
console.log(results);

}

}