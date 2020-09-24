
'use strict';
const openMenu = () => {
    const popupMenu = document.querySelector('.popup-menu');
    const headerMenu = document.querySelector('.header-main');
    headerMenu.addEventListener('click', (event) => {
        const target = event.target;
        if (target.closest('.menu-button>img')) {
            popupMenu.style.display = 'flex'
        } else if (target.closest('.scroll>a') || target.closest('.close-menu-btn>img')) {
            popupMenu.style.display = 'none'
        }
    })
}

    export default openMenu;
