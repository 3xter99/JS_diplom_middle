'use strict';

import selectClub from "./modules/selectClub";
import modalWindow from "./modules/modalWindow";
import openMenu from "./modules/openMenu";
import sliders from "./modules/Sliders";
import scrollBtn from "./modules/scrollBtn";
import calc from "./modules/calc";
import promo from "./modules/promo";




selectClub()
modalWindow()
openMenu()
sliders('.main-slider>.slide')
sliders('.gallery-slider>.slide')
scrollBtn()
calc()
promo()
