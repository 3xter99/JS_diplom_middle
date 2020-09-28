'use strict';


const sendForm = () => {

    const forms = document.querySelectorAll('.forms');
    const thanks = document.getElementById('thanks'),
        popup = document.querySelectorAll('.popup'),
        responseForm = thanks.querySelector('.response'),
        catchForm = thanks.querySelector('.catch')
    let monthInput = document.querySelectorAll('.month-input');
    const preloader = document.querySelector('.preloader')
    console.log(monthInput);


    const statusMessage = document.createElement('div')

    forms.forEach(form => {
        let userName = form.querySelector('input[name="name"]');
        let userPhone = form.querySelector('input[name="phone"]');
        let btn = form.querySelector('button');
        let checkbox = form.querySelector('.checkbox-popup');
        console.log(checkbox);

        btn.disabled = true
        btn.style.backgroundColor = '#808080'

        form.addEventListener('input', (event) => {
            const target = event.target
            if (target.name === 'name') {
                target.value = target.value.replace(/[^А-Яа-я\s]/, '')
            }
            if ((!userName || userName.value !== '') && userPhone.value !== '' && (!checkbox || checkbox.checked) ) {
                btn.disabled = false
                btn.style.backgroundColor = '#ffd11a'
            } else {
                btn.disabled = true
                btn.style.backgroundColor = '#808080'
            }

        })


        form.addEventListener('submit', (event) => {
            popup.forEach(item => {
                item.style.display = 'none'
            })
            preloader.classList.remove('loaded')
            const clearForm = () => {
                thanks.style.display = 'block'
                if (userName) {
                    userName.value = ''
                }
                if (checkbox) {
                    checkbox.checked = false
                }



                userPhone.value = ''
                setTimeout(() => {

                }, 4000)
                if (monthInput && monthInput[0]) {
                    monthInput[0].checked = true
                }
                btn.disabled = true
                btn.style.backgroundColor = '#808080'


            }



            event.preventDefault()
            form.appendChild(statusMessage)

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
                        responseForm.style.display = 'block'
                        catchForm.style.display = 'none'
                        clearForm()
                        preloader.classList.add('loaded')
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
