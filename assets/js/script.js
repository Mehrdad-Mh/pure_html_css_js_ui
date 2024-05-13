const wrapper = document.querySelector(".sliderWrapper");

const slides = document.querySelectorAll(".menuItem");

slides.forEach((slide,index) => {
    slide.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${100 * index}vw)`
    })
})