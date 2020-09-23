'use strict';

const modalWindow = () => {
    const body = document.querySelector('body');
    const popupBtn = document.querySelector('.open-popup');
    const popupContent = document.querySelector('.form-wrapper');

    body.addEventListener('click', (event) => {
        const target = event.target
        if (target.dataset.popup) {
            const popup = document.querySelector(`${target.dataset.popup}`)
            popup.style.display = 'block';


            popup.addEventListener('click', (event) => {
                let target = event.target;
                console.log(target);

                if (target.classList.contains('close_icon')) {
                    popup.style.display = 'none'
                } else {
                    target = target.closest('.form-wrapper')
                    if (!target) {
                        popup.style.display = 'none'
                    }
                }
            })
        }


        })






};


export default modalWindow;
