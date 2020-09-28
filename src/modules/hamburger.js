const hamburger = () => {
    const topMenu = document.querySelector('.top-menu');
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 767) {
            topMenu.style.position = 'fixed'
        } else topMenu.style.position = ''
    })

}

export default hamburger;
