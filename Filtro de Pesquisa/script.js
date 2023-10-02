
let filter = document.querySelector('header input')
let cards = document.querySelectorAll('.cards li')

filter.addEventListener('input', filterElement)

function filterElement() {
  if (filter.value != '') {
    for (let card of cards) {
      let cardTitle = card.querySelector('h2')
      cardTitle = cardTitle.textContent.toLowerCase()

      let filterText = filter.value.toLowerCase()

      if (!cardTitle.includes(filterText)) {
        card.style.display = 'none'
      } else {
        card.style.display = 'block'
      }
    }
  } else {
    for (let card of cards) {
      card.style.display = 'block'
    }
  }
}
