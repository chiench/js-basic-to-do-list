const btnSubmit = document.querySelector(".btn-submit");
const inputEl = document.querySelector("#input");

let ul = document.getElementById("list");
const listItemEmpty = document.querySelector(".list-item-empty");

let arrayInputValueLocal = localStorage.getItem("arrayInputValueLocal");
console.log("arrayInputValueLocal: ", arrayInputValueLocal);

btnSubmit.addEventListener("click", function () {
  if (arrayInputValueLocal) {
    arrayInputValueLocal = arrayInputValueLocal.concat(";", inputEl.value);
    localStorage.setItem("arrayInputValueLocal", arrayInputValueLocal);
  } else {
    localStorage.setItem("arrayInputValueLocal", inputEl.value);
  }
  console.log("Form submitted!");
});

if (arrayInputValueLocal) {
  listItemEmpty.style.display = "none";
  const arrayInputValueLocalSplit = arrayInputValueLocal.split(";");
  console.log("arrayInputValueLocalSplit: ", arrayInputValueLocalSplit);
  for (let index = 0; index < arrayInputValueLocalSplit.length; index++) {
    // Tạo thẻ <li>
    let li = document.createElement("li");

    li.className = "list-item";

    let tesst = "task something";
    // Tạo nội dung bên trong
    li.innerHTML = `
    <div class="content">
        <input type="checkbox">
        <span>${arrayInputValueLocalSplit[index]}</span>
    </div>
    <button class="btn-delete">
        <i class="far fa-trash-alt"></i>
    </button>
    `;

    // Thêm vào danh sách
    ul.appendChild(li);
    const btnDelete = document.querySelector(".btn-delete");
    const listItem = document.querySelector(".list-item");
    btnDelete.addEventListener("click", function () {
      console.log("click ");
    });
  }
} else {
  listItemEmpty.style.display = "block";
}
