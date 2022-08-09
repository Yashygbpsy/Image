Webcam.attach( '#camera' );

camera = document.getElementById("camera");
      
  Webcam.set({
    width:200,
    height:300,
    image_format : 'png',
  });

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]',modelLoaded);


  function modelLoaded() {
    console.log('Model Loaded Successfully');
  }
      
  function check(){
    img = document.getElementById('Captured_image');
    classifier.classify(img, gotResult);
  }

function gotResult(error, result) {
  if(error) {
    console.error(error);
  } 
  else {
 
    console.log(result);
    document.getElementById("result_object_name").innerHTML = result[0].label;
    document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(3);
  }
}




