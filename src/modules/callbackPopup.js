'use strict';

const callbackPopup = () => {
    const popup = document.getElementById('callback_form')
    const popupBtn = document.querySelector('.callback-btn');
    const popupContent = document.querySelector('.form-wrapper-callback')

    popupBtn.addEventListener('click', () => {
        popup.style.display = 'block';
    })


    popup.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('close_icon')) {
            popup.style.display = 'none'
        } else {
            target = target.closest('.form-wrapper-callback')
            if (!target) {
                popup.style.display = 'none'
            }
        }
    })
};


export default callbackPopup;
