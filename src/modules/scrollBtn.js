'use strict';

const scrollBtn = () => {
    const btnUpScroll = document.getElementById('totop')
  window.addEventListener('scroll', () => {
      if (window.pageYOffset < 700) {
        btnUpScroll.style.display = 'none'
      } else btnUpScroll.style.display = 'block'
  })
}

export default scrollBtn;
