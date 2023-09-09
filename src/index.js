document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    let inp = document.getElementById("new-task-description")
    handleToDo(inp.value)
    form.reset()
  })



});
function handleToDo(todo) {
  let p = document.createElement("p")
  let btn = document.createElement("button")
  btn.textContent = "X"
  p.textContent = `${todo} `
  p.appendChild(btn)
  document.querySelector("#list").appendChild(p)
  btn.addEventListener("click", () => {p.remove()})
}