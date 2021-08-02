/*Блок слайдера Pets*/
const sliderContainer = document.querySelector('.animals-card .wrapper-card-item');
const slidesItem = sliderContainer.querySelectorAll('.slide-item');
const leftBtn = document.querySelector('.left-arrow');
const rightBtn = document.querySelector('.right-arrow');
let counter = 1;
const size = slidesItem[0].clientWidth;
sliderContainer.style.transform = 'translateX(' + (-size * counter) + 'px)' ;
function nextSlide () {
    if(counter >= slidesItem.length -1) return;
    sliderContainer.style.transition = "transform 0.4s ease-in-out";
    counter++;
    sliderContainer.style.transform = 'translateX(' + (-size * counter) +'px)';
    slidesItem[counter].classList.add('active');
}
function prevSlide () {
    if(counter <= 0) return;
    sliderContainer.style.transition = "transform 0.4s ease-in-out";
    counter--;
    sliderContainer.style.transform = 'translateX(' + (-size * counter) +'px)' ;
}
function transitionEnd () {
    if(slidesItem[counter].id === "lastClone") {
        sliderContainer.style.transition = "none";
        counter = slidesItem.length - 2;
        sliderContainer.style.transform = 'translateX(' + (-size * counter) + 'px)' ;
    }
    else if(slidesItem[counter].id === "firstClone") {
        sliderContainer.style.transition = "none";
        counter = slidesItem.length - counter;
        sliderContainer.style.transform = 'translateX(' + (-size * counter) +'px)' ;
    }
}
rightBtn.addEventListener('click', nextSlide);
leftBtn.addEventListener('click', prevSlide);
sliderContainer.addEventListener('transitionend', transitionEnd);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Блок слайдера отзывов */
const reviewWrapper = document.querySelector('.review-wrapper');
const reviewItem = document.querySelectorAll('.review-wrapper .item');
const rangeInput = document.querySelector('.progress-bar input');
const windowWidth = document.documentElement.clientWidth;
const changeTime = 10000;
const pauseTime = 40000;
let reviewCounter = 0;
let translateConfig = 'translateX';
let reviewItemSize = reviewItem[0].clientWidth + (+getComputedStyle(reviewItem[0]).marginRight.slice(0,2)) + 5;//формирование ширины сдвига
if (windowWidth < 1221) {
    reviewItemSize = reviewItem[0].clientWidth + (+getComputedStyle(reviewItem[0]).marginRight.slice(0,2)) + 4;
}
if (windowWidth < 997) {
    reviewItemSize = reviewItem[0].clientHeight + 22;
    translateConfig = 'translateY';
}

let startInterval = setInterval(changeSlideInTime, changeTime);/////////Создание интервала по определенному времени

function changeSlideInTime () {/////////////////////////////////////Смена слайдов
    if(reviewCounter === reviewItem.length - 4) {
        reviewCounter = -1;
    }
    reviewWrapper.style.transition = "transform 0.4s ease-in-out";
    reviewCounter++;
    reviewWrapper.style.transform = `${translateConfig}(${(-reviewItemSize * reviewCounter)}px)`;
    clearInterval(startInterval);
    startInterval = setInterval(changeSlideInTime, changeTime);
    rangeInput.value = reviewCounter;
}
function pauseInterval (event) {//////////////////////////////////////////Создание паузы при нажатии на отзыв
    if(!event.target.classList.contains('review-wrapper')) {
        clearInterval(startInterval);
        startInterval = setInterval(changeSlideInTime, pauseTime);
    }
}
function changeRangeInput () {////////////////////////////////////////////Перелистывание слайдов по нажатию на инпут
    reviewWrapper.style.transition = "transform 0.4s ease-in-out";
    reviewCounter = +rangeInput.value;
    reviewWrapper.style.transform = 'translateX(' + (-reviewItemSize * reviewCounter) + 'px)';
    clearInterval(startInterval);
    startInterval = setInterval(changeSlideInTime, changeTime);
}
/*Навешивание событий*/
rangeInput.addEventListener('change', changeRangeInput);
rangeInput.addEventListener('mousemove', changeRangeInput);
reviewWrapper.addEventListener('click', pauseInterval);
