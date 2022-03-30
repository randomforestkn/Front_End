const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
  button.addEventListener('click', function (e)  {

    // position of the click inside the button absolute
    const x = e.clientX
    const y = e.clientY

    // position of the start of the button
    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    // position inside the button click relative
    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    this.appendChild(circle)

    setTimeout(() => circle.remove(), 500)
  })
})
