const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    // removeActiveButton()
    panel.classList.add('active')
  })
})

// When I click on any of the cards, i want to remove all the active classes from all of them and then put the active class on the clicked one alone
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}

// function removeActiveButton() {
//   panels.forEach((panel) => {
//     panel.classList.remove('active')
//   })
// }
