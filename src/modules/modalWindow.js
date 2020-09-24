'use strict';

const modalWindow = () => {
    const body = document.querySelector('body');
    const fixedGift = document.querySelector('.fixed-gift');

    body.addEventListener('click', (event) => {
        const targetPopup = event.target.dataset.popup
        if (targetPopup) {
            const popup = document.querySelector(`${targetPopup}`)
            if (targetPopup === '#gift') {
                fixedGift.style.display = 'none'
            }
            
            popup.style.display = 'block';


            popup.addEventListener('click', (event) => {
                let target = event.target;

                if (target.classList.contains('close_icon') || target.closest('.close-btn')) {
                    popup.style.display = 'none'
                } else {
                    target = target.closest('.form-wrapper')
                    if (!target ) {
                        popup.style.display = 'none'
                    }
                }
            })
        }


        })






};


export default modalWindow;
