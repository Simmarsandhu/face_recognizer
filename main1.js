Webcam.set({
    width: 350 ,
    height: 300,
    image_format: "png",
    png_quality: 90 

});
camera = document.getElementById("camera");
Webcam.attach("#camera")

function capture(){
    Webcam.snap(function(data_uri){
      document.getElementById("capture").innerHTML = "<img id='capture_img' src="+data_uri+">";

    })
}
console.log("ml5version-",ml5.version);

classifer = ml5.imageClassifier(" https://teachablemachine.withgoogle.com/models/iNFovKhzq/model.json", modelloaded); 
function modelloaded(){
    console.log("modelloaded");
}
function identify(){
    img=document.getElementById("capture_img");
    classifer.classify(img,gotresult);


}
function gotresult(error,results){
       if (error){
           console.error(error);

       }
       else{
           console.log(results);
           document.getElementById("name").innerHTML = results[0].label;
           document.getElementById("Accuracy").innerHTML = results[0].confidence.toFixed(2);

       }
   
}

