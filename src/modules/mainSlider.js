'use strict';

const mainSlider = () => {

        const slide = document.querySelectorAll('.slide');

        let currentSlide = 0,
            interval;

        const prevSlide = (element, index) => {
            element[index].style.display = 'none'
        }
        const nextSlide = (element, index) => {
            element[index].style.display = ''
        }


        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide)
            currentSlide++
            if (currentSlide >= 5) {
                currentSlide = 0
            }
            nextSlide(slide, currentSlide)
        }

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time)

        }


    startSlide(3000)


    }

export default mainSlider;
