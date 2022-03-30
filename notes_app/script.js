const add_btn = document.getElementById('add')

const notes = JSON.parse(localStorage.getItem('notes'))

if(notes) {
  notes.forEach(note => add_new_note(note))
}

add_btn.addEventListener('click', () => add_new_note())

function add_new_note(text = "") {
  const note = document.createElement('div')
  note.classList.add('note')

  note.innerHTML = `
  <div class="tools">
    <button class="edit"><i class="fas fa-edit"></i></button>


    <button class="delete"><i class="fas fa-trash-alt"></i></button>
  </div>

  <div class="main ${text ? "" : "hidden"}"></div>
  <textarea class="${text ? "hidden" : ""}"></textarea>
  `

  const edit_btn = note.querySelector('.edit')
  const delete_btn = note.querySelector('.delete')
  const main = note.querySelector('.main')
  const text_area = note.querySelector('textarea')


  text_area.value = text
  main.innerHTML = marked.parse(text)

  delete_btn.addEventListener('click', () => {
    note.remove()
    updateLS()
  })

  edit_btn.addEventListener('click', () => {
    main.classList.toggle('hidden')
    text_area.classList.toggle('hidden')
  })

  text_area.addEventListener('input', (e) => {
     const { value } = e.target

     main.innerHTML = marked.parse(value)


     updateLS()
  })

  document.body.appendChild(note)
}

function updateLS() {

  const notes_text =  document.querySelectorAll('textarea')

  const notes = []

  notes_text.forEach(note => notes.push(note.value))


  localStorage.setItem('notes', JSON.stringify(notes))
}
