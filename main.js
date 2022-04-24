video = "";
Status = "";

function setup(){
    canvas = createCanvas(480,360);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480,360);
    video.hide();
}
function draw(){
    image(video,0,0,480,360);
}
function start(){
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    object = document.getElementById("Object_names").value;
}
function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    video.loop();
    video.volume(0);
    video.speed(1);
}