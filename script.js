const body = document.querySelector('body')
const slides = document.querySelectorAll('.slide')
const rightBtn = document.getElementById('right')
const leftBtn = document.getElementById('left')



let activeSlide = 0;
setBgImage();


rightBtn.addEventListener('click', () => {
    activeSlide++;
    if(activeSlide > slides.length - 1){
        activeSlide = 0
    }

    setBgImage();
    setActiveSlide();
})

leftBtn.addEventListener('click', () => {
    activeSlide--;
    if(activeSlide < 0){
        activeSlide = slides.length - 1;
    }

    setBgImage();
    setActiveSlide();
})



function setBgImage() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;

}

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[activeSlide].classList.add('active');
}