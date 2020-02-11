function updateImage() {
    
    var canvas = document.getElementById("blogCanvas");
    var canvasContext = canvas.getContext("2d");
    var textInput = document.getElementById("blogText").value;
    
    var pixelCount = Math.ceil(textInput.length / 3);
    var imageWidth = 200;
    var imageHeight =  Math.ceil(pixelCount / imageWidth); 
	
    canvas.height = imageHeight;
    canvas.width = imageWidth;
    var image = canvasContext.createImageData(imageWidth, imageHeight);
	
	var textPosition = 0;
    
    for (var i = 0; i < pixelCount * 4; i += 4) {
        image.data[i + 0] = textInput.charCodeAt(textPosition + 0); //Red
        image.data[i + 1] = textInput.charCodeAt(textPosition + 1); //Green 
        image.data[i + 2] = textInput.charCodeAt(textPosition + 2); //Blue
        image.data[i + 3] = 255; //Alpha
		textPosition += 3;
    }

    canvasContext.putImageData(image, 0, 0); 

    document.body.style.backgroundImage = "url('" + canvas.toDataURL() + "')"; 
}

function decodeText() {
    var canvas = document.getElementById("blogCanvas");
    var canvasContext = canvas.getContext("2d");
    var image = canvasContext.getImageData(0, 0, canvas.width, canvas.height);
	
	var newText = "";
	
	for (var i = 0; i < image.data.length; i += 4) {
		for (var j = 0; j < 3; j++) {
			if (image.data[i+j] != 0) {
				newText += String.fromCharCode(image.data[i+j]);
			}
		}
    }
	
	document.getElementById("decodedText").value = newText;
}
