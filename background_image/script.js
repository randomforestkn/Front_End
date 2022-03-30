const boxes_container = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
  boxes_container.classList.toggle('big')
})

function create_boxes() {
  for (let i = 0; i < 4; i++)  {
    for (let y = 0; y < 4; y++) {
        const box = document.createElement('div')
        box.classList.add('box')
        box.style.backgroundPosition = `${-y * 125}px ${-i * 125}px`
        boxes_container.appendChild(box)
    }
  }
}

create_boxes()
