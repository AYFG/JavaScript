const form = document.querySelector(".todoForm");
const input = document.querySelector(".todoInput");
const submit = document.querySelector(".todoSubmitBtn");
const ul = document.querySelector(".todoUl");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value !== "") {
    console.log(input.value);
    const li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";
  }
});
