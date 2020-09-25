'use strict';

const scrollBtn = () => {
    const btnUpScroll = document.getElementById('totop')
    if (window.pageYOffset === 0) {
        btnUpScroll.style.display = 'none'
    }

  window.addEventListener('scroll', () => {
      if (window.pageYOffset < 700) {
        btnUpScroll.style.display = 'none'
      } else btnUpScroll.style.display = 'block'
  })
}

export default scrollBtn;
