Webcam.set({
    width: 350 ,
    height: 300,
    image_format: "png",
    png_quality: 90 

});
camera = document.getElementById("camera");
Webcam.attach("#camera");



function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("capture").innerHTML = "<img id='capture_img' src="+data_uri+">";
  
      })
  }

console.log("ml5version-",ml5.version);

classifier= ml5.imageClassifier( "https://teachablemachine.withgoogle.com/models/iNFovKhzq/model.json");
function modelloaded(){
    console.log("modelloaded");
}
function identify(){
    img=document.getElementById("capture_img");
    classifier.classify(img,gotresults);

}
function gotresults(error,results){

    if(error){
        console.log(error);
    }
   else{
       console.log(results);
       document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2);
       document.getElementById("name").innerHTML=results[0].label; 
   }
} 