let dark_theme = document.querySelector('.dark_theme')
let menu = document.querySelector('.menu')
let body = document.querySelector('body')
let navigation = document.querySelector('.navigation')

dark_theme.addEventListener('click', () => {
  body.classList.toggle('dark')
  dark_theme.classList.toggle('active')
})


menu.addEventListener('click', () => {
  menu.classList.toggle('active')
  navigation.classList.toggle('active')
})
