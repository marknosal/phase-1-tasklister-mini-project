document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()
    inputHandler(document.getElementById('new-task-description').value)
    document.querySelector('form').reset()
  })

});

function inputHandler (input) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', () => deleteHandler(p))
  btn.textContent = ' X'
  p.textContent = `${input} `
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
  
}

function deleteHandler (p) {
  p.remove()
}