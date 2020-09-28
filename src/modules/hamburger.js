const hamburger = () => {
    const topMenu = document.querySelector('.top-menu'),
        headerMain = document.querySelector('.header-main');
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 767) {
            topMenu.style.position = 'fixed'
            headerMain.style.marginTop = '60px'
        } else {
            topMenu.style.position = ''
            headerMain.style.marginTop = ''
        }
    })

}

export default hamburger;
