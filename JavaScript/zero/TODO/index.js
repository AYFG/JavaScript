const $input = document.querySelector(".todoInput");
const $form = document.querySelector(".todoForm");
const $button = document.querySelector(".todoSubmitBtn");
const $ul = document.querySelector(".todoUl");

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log($input.value);
  const li = document.createElement("li");
  li.innerText = $input.value;
  $ul.appendChild(li);
});
