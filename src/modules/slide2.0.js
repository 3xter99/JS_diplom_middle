//
//
// const slide2 = () => {
//     let slideIndex = 1,
//         interval;
//     showSlides(slideIndex);
//
//     function plusSlide() {
//         showSlides(slideIndex += 1);
//     }
//
//     function minusSlide() {
//         showSlides(slideIndex -= 1);
//     }
//
//     function showSlides(n) {
//         let i;
//         let slides = document.getElementsByClassName("item");
//         if (n > slides.length) {
//             slideIndex = 1
//         }
//         if (n < 1) {
//             slideIndex = slides.length
//         }
//         for (i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";
//         }
//         slides[slideIndex - 1].style.display = "block";
//     }
//
//
//     const slide = document.querySelector('.slider');
//     slide.addEventListener('click', (event) => {
//         const target = event.target
//         if (target.closest('.next')) {
//             plusSlide()
//         }
//         if (target.closest('.prev')) {
//             minusSlide()
//         }
//     })
//
//     const startSlide = (time = 3000) => {
//         interval = setInterval(plusSlide, time)
//
//     }
//
//
//     startSlide(3000)
//
//
//     const stopSlide = () => {
//         clearInterval(interval )
//
//     }
//
//
//     slide.addEventListener('mouseover', event => {
//         if (event.target.matches('.next') ||
//             event.target.matches('.prev')) {
//             stopSlide()
//         }
//
//     })
//     slide.addEventListener('mouseout', event => {
//         if (event.target.matches('.next') ||
//             event.target.matches('.prev')) {
//             startSlide()
//         }
//
//     })
//
//
// }
//
// export default slide2;
const slide2 = () => {

    const slide = document.querySelectorAll('.item'),
        slider = document.querySelector('.slider');

    let currentSlide = 0,
        interval;


    let dot = document.querySelectorAll('.dot')

    const prevSlide = (element, index) => {
        element[index].style.display = 'none'

    }
    const nextSlide = (element, index) => {
        element[index].style.display = 'flex'

    }

    const prevSlideDot = (element, index, strClass) => {
        element[index].classList.remove(strClass)

    }
    const nextSlideDot = (element, index, strClass) => {
        element[index].classList.add(strClass)

    }


    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'portfolio-item-active')
        prevSlideDot(dot, currentSlide, 'dot-active')
        currentSlide++
        if (currentSlide >= slide.length) {
            currentSlide = 0
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active')
        nextSlideDot(dot, currentSlide, 'dot-active')

    }

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time)

    }

    const stopSlide = () => {
        clearInterval(interval )

    }

    // переключение слайдов по нажатию кнопки или точки

    slider.addEventListener('click', event => {
        event.preventDefault()
        let target = event.target
        if (!target.matches('.next, .prev, .dot')) {
            return
        }

        prevSlide(slide, currentSlide)
        prevSlideDot(dot, currentSlide, 'dot-active')

        if (target.matches('.next')) {
            currentSlide++
        } else if (target.matches('.prev')) {
            currentSlide--
        } else if (target.matches('.dot')) {
            dot.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index
                }
            })
        }
        if (currentSlide >= slide.length) {
            currentSlide = 0
        }
        if (currentSlide < 0) {
            currentSlide = slide.length - 1
        }
        nextSlide(slide, currentSlide)
        nextSlideDot(dot, currentSlide, 'dot-active')
    })

    slider.addEventListener('mouseover', event => {
        if (event.target.matches('.next') || event.target.matches('.prev') ||
            event.target.matches('.dot')) {
            stopSlide()
        }

    })
    slider.addEventListener('mouseout', event => {
        if (event.target.matches('.next') || event.target.matches('.prev') ||
            event.target.matches('.dot')) {
            startSlide()
        }

    })



    startSlide(1500)



}


export default slide2;
