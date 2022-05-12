let slideIndex = 3;

function plusSlides(n) {
    showSlides(slideIndex += n, n > 0);
}

function showSlides(n, isRight) {
    let slides = document.getElementsByClassName("v-carousel-content");

    if (n > slides.length)
        slideIndex = 1
    if (n < 1)
        slideIndex = slides.length

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("v-carousel-content-active-goLeft");
        slides[i].classList.remove("v-carousel-content-active-goRight");
    }

    let carousel = document.getElementsByClassName("v-carousel")[0];
    carousel.classList.remove("v-carousel-leftable");
    carousel.classList.remove("v-carousel-rightable");

    if (isRight) {
        carousel.classList.add("v-carousel-rightable");
        slides[slideIndex - 1].classList.add("v-carousel-content-active-goRight");
    } else {
        carousel.classList.add("v-carousel-leftable");
        slides[slideIndex - 1].classList.add("v-carousel-content-active-goLeft");
    }
}