'use strict';


const sendForm = () => {
    const errorMessage = 'Что то пошла не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с Вами свяжемся'

    const forms = document.querySelectorAll('.forms');


    const statusMessage = document.createElement('div')
    // statusMessage.style.cssText = `font-size: 2rem; color: ${color}`

    forms.forEach(form => {
        form.addEventListener('submit', (event) => {
            let userName = form.querySelector('input[name="name"]');
            event.preventDefault()
            form.appendChild(statusMessage)

            const formDara = new FormData(form)
            let body = {}
            console.log(userName);
            if (userName && !userName.value) {
                alert('Поле имя не заполнено');
                return;
            }

            formDara.forEach((val, key) => {
                body[key] = val


            })


            postData(body)
                    .then((response) => {
                        if (response.status !== 200) {
                            throw new Error('Статус нетворк нот 200')
                        }
                        // preloader.classList.add('loaded')
                        // userName.forEach(item => item.value = '')
                        // userPhone.forEach(item => item.value = '')
                        statusMessage.textContent = successMessage
                        setTimeout(() => {
                            statusMessage.textContent = ''
                        }, 4000)
                    })
                    .catch(() => {
                        statusMessage.textContent = errorMessage
                        // userName.forEach(item => item.value = '')
                        // userPhone.forEach(item => item.value = '')
                        // preloader.classList.add('loaded')
                    })
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
