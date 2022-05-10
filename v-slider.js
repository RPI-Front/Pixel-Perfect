let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("v-carousel-content");

    if (n > slides.length)
        slideIndex = 1
    if (n < 1)
        slideIndex = slides.length

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("v-carousel-content-active");
    }

    slides[slideIndex - 1].classList.add("v-carousel-content-active");
}