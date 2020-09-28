'use strict';

import selectClub from "./modules/selectClub";
import modalWindow from "./modules/modalWindow";
import openMenu from "./modules/openMenu";
import sliders from "./modules/Sliders";
import scrollBtn from "./modules/scrollBtn";
import calc from "./modules/calc";
import sliderCarousel from "./modules/sliderCarousel";
import sendForm from "./modules/sendForrm";
import maskPhone from "./modules/maskPhone";
import slide2 from "./modules/slide2.0";




selectClub()
modalWindow()
openMenu()
sliders('.main-slider>.slide')
// sliders('.gallery-slider>.slide')
scrollBtn()
calc()


let sliderCar = new sliderCarousel({
    main: '.services-wrapper',
    wrap: '.services-slider',
    // prev: '#test-left',
    // next: '#test-right',
    slidesToShow: 4,
    infinity: true
})
sliderCar.init()


slide2()

sendForm()
// sendForm()
// sendForm()

maskPhone('input[name="phone"]');
