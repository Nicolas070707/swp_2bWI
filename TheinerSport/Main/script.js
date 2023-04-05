var imageIndex = 1;
var totalImages = 3;

function changeImage() {
  var image = document.getElementById("image");
  imageIndex = (imageIndex % totalImages) + 1;
  image.src = "image" + imageIndex + ".jpg";
  image.alt = "Bild " + imageIndex;
}

setInterval(changeImage, 10000);
