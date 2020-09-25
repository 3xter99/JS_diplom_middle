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

  const clubCalc = (club, target, month = 1) => {
        if (!target.closest('.time>input') && !target.closest('.club>input')) {
          return
        }
      // console.log(a)
// const promo = document.querySelector('.price-message>input')
//       promo.addEventListener('change', () => {
//           console.log(promo.value)
//           if (promo.value === 'ТЕЛО2019') {
//               priceTotal.textContent = Math.round(prise[club][target.value] * 0.70)
//           }
//       })
        priceTotal.textContent = prise[club][month]
  }


     const cardOrder = document.querySelectorAll('input[type="radio"]')
    cardOrder.forEach(item => {
        item.addEventListener('click', event => {
            let month = 0;
            time.forEach(item => {
                if (item.checked) {
                    month = item.value
                }
            })

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
