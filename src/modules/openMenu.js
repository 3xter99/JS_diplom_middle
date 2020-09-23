
'use strict';
const openMenu = () => {
    const menuBtn = document.querySelector('.menu-button>img')
    const popupMenu = document.querySelector('.popup-menu');
    menuBtn.addEventListener('click', () => {
        popupMenu.style.display = 'flex,'
    })
}

    export default openMenu;
