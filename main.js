Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 Webcam.attach( '#cam' );
 function take_image(){
 Webcam.snap( function(data_uri) {
    // display results in page
    document.getElementById('img').innerHTML = 
     '<img id="image2" src="'+data_uri+'"/>';
} );}
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/tYQGaiCGv/model.json",is_model_loaded);
function is_model_loaded(){
    console.log("model loaded");
}
function recongnize(){
    image1=document.getElementById("image2");
    classifier.classify(image1,displayPic);
}
function displayPic(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("name").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=100*(results[0].confidence.toFixed(2))+"%";
    }

}