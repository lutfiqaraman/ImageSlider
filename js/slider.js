let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    currentImage = 0;

//clear all images
function reset() {
    for(let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}

//Init Slider
function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
}

//show prev
function slideLeft() {
    reset();
    sliderImages[currentImage - 1].style.display = "block";
    currentImage--;
}

//show next
function slideRight() {
    reset();
    sliderImages[currentImage + 1].style.display = "block";
    currentImage++;
}

//left arrow click
arrowLeft.addEventListener("click", function(){
    if( currentImage === 0) {
        currentImage = sliderImages.length;
    }

    slideLeft();
});

//right arrow click
arrowRight.addEventListener("click", function(){
    if( currentImage === sliderImages.length - 1) {
        currentImage = -1;
    }

    slideRight();
});

startSlide();