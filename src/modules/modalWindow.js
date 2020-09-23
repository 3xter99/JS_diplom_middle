'use strict';

const modalWindow = () => {
    const popup = document.getElementById('free_visit_form')
    const popupBtn = document.querySelector('.open-popup');
    const popupContent = document.querySelector('.form-wrapper-visit')

    popupBtn.addEventListener('click', () => {
                popup.style.display = 'block';
        })

    popup.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('close_icon')) {
            popup.style.display = 'none'
        } else {
            target = target.closest('.form-wrapper-visit')
            if (!target) {
                popup.style.display = 'none'
            }
        }
    })
};


export default modalWindow;
