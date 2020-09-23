'use strict';

const selectClub = () => {

    const body = document.body
    const clubsList = document.querySelector('.clubs-list>ul')
        body.addEventListener('click', (event) => {
            let target = event.target
            console.log(target)
            console.log(getComputedStyle(clubsList).display);
            if (target.closest('.club-select') && getComputedStyle(clubsList).display === 'none') {
                clubsList.style.display = 'block'
            } else clubsList.style.display = ''
    })
}



export default selectClub;
