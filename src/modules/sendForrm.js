'use strict';


const sendForm = (id, color) => {
    const errorMessage = 'Что то пошла не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с Вами свяжемся'

    const form = document.getElementById(`${id}`)
    console.log(form)
    let userName = document.getElementsByName('name')
    let userPhone = document.getElementsByName('phone')
    const preloader = document.querySelector('.preloader')
    form.addEventListener('input', (event) => {
        const target = event.target
        if (target.name === 'phone') {
            target.value = target.value.replace(/[^0-9\+]/, '')
        }
        if (target.name === 'name') {
            target.value = target.value.replace(/[^А-Яа-я\s]/, '')
        }
    })

    const statusMessage = document.createElement('div')
    statusMessage.style.cssText = `font-size: 2rem; color: ${color}`

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        form.appendChild(statusMessage)
        // preloader.classList.remove('loaded')

        const formDara = new FormData(form)
        let body = {}

        formDara.forEach((val, key) => {
            body[key] = val
        })

        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Статус нетворк нот 200')
                }
                preloader.classList.add('loaded')
                userName.forEach(item => item.value = '')
                userPhone.forEach(item => item.value = '')
                statusMessage.textContent = successMessage
                setTimeout(() => {
                    statusMessage.textContent = ''
                }, 4000)
            })
            .catch(() => {
                statusMessage.textContent = errorMessage
                userName.forEach(item => item.value = '')
                userPhone.forEach(item => item.value = '')
                // preloader.classList.add('loaded')
            })
    })

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)

        })
    }

}

export default sendForm;
