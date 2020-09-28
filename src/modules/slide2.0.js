

const slide2 = () => {
    let slideIndex = 1,
        interval;
    showSlides(slideIndex);

    function plusSlide() {
        showSlides(slideIndex += 1);
    }

    function minusSlide() {
        showSlides(slideIndex -= 1);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("item");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }


    const slide = document.querySelector('.slider');
    slide.addEventListener('click', (event) => {
        const target = event.target
        if (target.closest('.next')) {
            plusSlide()
        }
        if (target.closest('.prev')) {
            minusSlide()
        }
    })

    const startSlide = (time = 3000) => {
        interval = setInterval(plusSlide, time)

    }


    startSlide(3000)


    const stopSlide = () => {
        clearInterval(interval )

    }


    slide.addEventListener('mouseover', event => {
        if (event.target.matches('.next') ||
            event.target.matches('.prev')) {
            stopSlide()
        }

    })
    slide.addEventListener('mouseout', event => {
        if (event.target.matches('.next') ||
            event.target.matches('.prev')) {
            startSlide()
        }

    })


}

export default slide2;
