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
        }


        })

const popupAll = document.querySelectorAll('.popup')
    popupAll.forEach(item => {
        item.addEventListener('click', (event) => {
            let target = event.target;
            const inputs = item.querySelectorAll('input');

            if (target.classList.contains('close_icon') || target.closest('.close-btn')) {
                item.style.display = 'none'
                inputs.forEach(item => {
                    item.value = ''
                })
            } else {
                target = target.closest('.form-wrapper')
                if (!target ) {
                    item.style.display = 'none'
                    inputs.forEach(item => {
                        item.value = ''
                    })
                }
            }
        })
    })







};


export default modalWindow;
