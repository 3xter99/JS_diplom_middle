'use strict';

const sliders = (selector) => {

        const slide = document.querySelectorAll(selector);
    const allDots = document.querySelector('.portfolio-dots')
        let currentSlide = 0,
            interval;

    if (!slide) {
      return
    }
    const addDots = () => {
        slide.forEach(() => {
            let li = document.createElement('li')
            li.classList.add('dot')
            allDots.appendChild(li)
        })

    }
    addDots()
    let dot = document.querySelectorAll('.dot')

        const prevSlide = (element, index) => {
            element[index].style.display = 'none'
        }
        const nextSlide = (element, index) => {
            element[index].style.display = 'flex'
        }


        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide)
            currentSlide++
            if (currentSlide >= slide.length) {
                currentSlide = 0
            }
            nextSlide(slide, currentSlide)
        }

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time)

        }


    startSlide(3000)




    }

export default sliders;
