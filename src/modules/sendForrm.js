'use strict';


const sendForm = () => {

    const forms = document.querySelectorAll('.forms');
    const thanks = document.getElementById('thanks'),
        popup = document.querySelectorAll('.popup'),
        responseForm = thanks.querySelector('.response'),
        catchForm = thanks.querySelector('.catch')
    
    



    const statusMessage = document.createElement('div')

    forms.forEach(form => {
        form.addEventListener('input', (event) => {
            const target = event.target
            if (target.name === 'name') {
                target.value = target.value.replace(/[^А-Яа-я\s]/, '')
            }
        })


        form.addEventListener('submit', (event) => {
            let userName = form.querySelector('input[name="name"]');
            let userPhone = form.querySelector('input[name="phone"]');



            const clearForm = () => {
                thanks.style.display = 'block'
                userName.value = ''
                userPhone.value = ''
                setTimeout(() => {
                    popup.forEach(item => {
                        item.style.display = 'none'
                    })
                }, 4000)
            }



            event.preventDefault()
            form.appendChild(statusMessage)

            const formDara = new FormData(form)
            let body = {}
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
                        responseForm.style.display = 'block'
                        catchForm.style.display = 'none'
                        clearForm()
                    })
                    .catch(() => {
                        responseForm.style.display = 'none'
                        catchForm.style.display = 'block'
                        clearForm()
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
