'use strict';

const modalWindow = () => {
    const popup = document.getElementById('free_visit_form')
    const popupBtn = document.querySelector('.open-popup');
    const popupContent = document.querySelector('.form-content')

    popupBtn.addEventListener('click', () => {
                popup.style.display = 'block';
                popupContent.style.left = `${screen.width/2 - (popupContent.getBoundingClientRect().width/2) + 50}px`
        })


    popup.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('close_icon')) {
            popup.style.display = 'none'
        } else {
            target = target.closest('.form-content')
            if (!target) {
                popup.style.display = 'none'
            }
        }
    })
};


export default modalWindow;
