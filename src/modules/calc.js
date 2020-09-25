'use strict';
const calc = () => {
    const cardSchelkovo = document.getElementById('card_leto_schelkovo'),
        cardMozaika = document.getElementById('card_leto_mozaika'),
        priceTotal = document.getElementById('price-total'),
        time = document.querySelectorAll('.time>input')
  const prise = {
      mozaika: {
          1 : 1990,
          6 : 9900,
          9 : 13900,
          12 : 19900
      },
      schelkovo: {
          1 : 2999,
          6 : 14990,
          9 : 21990,
          12 : 24990
      }
  }
  let promoTrueOrFalse = false

    const promoInput = document.querySelector('input[placeholder="Промокод"]')
    promoInput.addEventListener('change', () => {
      promoTrueOrFalse = promoInput.value === 'ТЕЛО2020';
      // if (promoTrueOrFalse) {
      //     priceTotal.textContent *= 0.7
      // }
    })


  const clubCalc = (club, target, month = 1) => {
        if (!target.closest('.time>input') && !target.closest('.club>input')) {
          return
        }
        if (promoTrueOrFalse) {
            priceTotal.textContent = Math.round(prise[club][month] * 0.7)
        } else priceTotal.textContent = prise[club][month]

  }

// кликаем по кнопкам
     const cardOrder = document.querySelectorAll('input[type="radio"]')
    cardOrder.forEach(item => {
        item.addEventListener('click', event => {
            let month = 0;
            //перебераю массив с выбором месяца
            time.forEach(item => {
                // если какой то чек бокс с выбором месяца нажат
                if (item.checked) {
                    //то в переменную записываем значение этого чекбокса (1 или 6, 9, 12)
                    month = item.value
                }
            })
                // если нажат чек на какой то клуб - то вызываем функцию калькулятор и передаем название, таргет и
                //переменную month
            const target = event.target
            if (cardSchelkovo.checked) {
                clubCalc('schelkovo', target, month)
            } else
            if (cardMozaika.checked) {
                clubCalc('mozaika', target, month)
            }
        })
    })
}

export default calc;
