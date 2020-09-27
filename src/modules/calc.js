
const calc = () => {
    const priceTotal = document.getElementById('price-total');
    const form = document.querySelector('.cardPrice');

  const prices = {
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

  const promos = {
      'ТЕЛО2020': 30
  }


    const handleInput = () => {
        const monthInput = document.querySelectorAll('.month-input')
        const clubInput = document.querySelectorAll('.club-input');
        const promoInput = document.querySelector('.promo-input');

        let month;
        monthInput.forEach(item => {
            if (item.checked) {
                month = item.value;
            }
        })
        let club;
        clubInput.forEach(item => {
            if (item.checked) {
                club = item.value;
            }
        })

        const promo = promoInput.value;
        const discount = promos[promo] || 0
            priceTotal.textContent = Math.round(prices[club][month] * (1 - discount/100))

    }

    form.addEventListener('change', handleInput)



}

export default calc;
