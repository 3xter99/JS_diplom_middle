'use strict';

const selectClub = () => {

    const body = document.body
    const clubsList = document.querySelector('.clubs-list>ul')
        body.addEventListener('click', (event) => {
            let target = event.target
            if (target.closest('.club-select') && getComputedStyle(clubsList).display === 'none') {
                clubsList.style.display = 'block'
            } else if (!target.closest('.clubs-list>ul')) {
                clubsList.style.display = ''
            }

    })
}



export default selectClub;
