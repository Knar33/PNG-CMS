function updateImage() {
    var imageWidth = 200;
    
    var canvas = document.getElementById("blogCanvas");
    var canvasContext = canvas.getContext("2d");
    var textInput = document.getElementById("blogText").value;
    
    var pixelCount = Math.ceil(textInput.length / 4);
    var imageHeight =  Math.ceil(pixelCount / imageWidth); 

    canvas.height = imageHeight;
    canvas.width = imageWidth;
    var image = canvasContext.createImageData(imageWidth, imageHeight);
    
    for (var i = 0; i < textInput.length; i += 4) {
        image.data[i + 0] = textInput.charCodeAt(i + 0); //Red
        image.data[i + 1] = textInput.charCodeAt(i + 1); //Green 
        image.data[i + 2] = textInput.charCodeAt(i + 2); //Blue
        image.data[i + 3] = textInput.charCodeAt(i + 2); //Alpha
    }

    canvasContext.putImageData(image, 0, 0); 

    document.body.style.backgroundImage = "url('" + canvas.toDataURL() + "')"; 
}