const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

function paintImage(chosenImage) {
    const backgroundImage = `url("img/${chosenImage}")`;
    document.body.style.backgroundImage = backgroundImage;
    document.body.style.backgroundImage.width = "100%";
    document.body.style.backgroundImage.height = "100%";
}

paintImage(chosenImage);