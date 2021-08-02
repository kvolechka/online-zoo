const readMoreBtn = document.querySelector(".btn-more");
const allDescriptionWrapper = document.querySelector(".wrapper");
const allDescriptionContent = document.querySelector(".wrapper-content");
function changeHiddenMode () {
    if(readMoreBtn.textContent === "Read Less") {
        allDescriptionWrapper.style.height = "259px";
        readMoreBtn.innerHTML = "Read More"
    }
    else {
        allDescriptionWrapper.style.height = `${allDescriptionContent.offsetHeight}px`;
        readMoreBtn.innerHTML = "Read Less"
    }
}
readMoreBtn.addEventListener("click", changeHiddenMode);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const sliderContainer = document.querySelector('.slider-content');
const slidesItem = sliderContainer.querySelectorAll('.video-thumb');
const mainVideo = document.querySelector('.video-review .main-video');
const leftBtn = document.querySelector('.arrow-left');
const rightBtn = document.querySelector('.arrow-right');
let sliderContainerWidth = sliderContainer.offsetWidth;
let slideWidth = sliderContainer.firstElementChild.offsetWidth;
let k = Math.round(sliderContainerWidth/slideWidth);
let counter = 0;
const size = slidesItem[0].clientWidth;
sliderContainer.style.transform = 'translateX(' + (-size * counter) + 'px)' ;
function nextSlide () {
    if(counter === slidesItem.length - k) {
        counter = -1;
    }
    sliderContainer.style.transition = "transform 0.4s ease-in-out";
    counter++;
    sliderContainer.style.transform = 'translateX(' + (-size * counter) +'px)';
    console.log(counter)
}
function prevSlide () {
    if(counter <= 0) {
        counter = slidesItem.length - k + 1;
    }
    sliderContainer.style.transition = "transform 0.4s ease-in-out";
    counter--;
    sliderContainer.style.transform = 'translateX(' + (-size * counter) +'px)' ;
}
  function openVideo (e) {
    let urlVideo = e.target.firstElementChild.src;
    e.target.firstElementChild.src = mainVideo.src;
    mainVideo.src = urlVideo;
  }
rightBtn.addEventListener('click', nextSlide);
leftBtn.addEventListener('click', prevSlide);
sliderContainer.addEventListener('click', openVideo)


