import { showToast } from "./scripts/toast.js";

const btnAdd = document.querySelector(".btn-submit");
const input = document.querySelector("#input");
const ul = document.getElementById("list");
const emptyMsg = document.querySelector(".list-item-empty");

let tasks = localStorage.getItem("tasks");

console.log("Tasks inital ", tasks);

btnAdd.addEventListener("click", function (event) {
    event.preventDefault();
    if (!input.value) {
        showToast("Please enter a task!");
        return;
    }
    if (tasks) {
        tasks = tasks.concat(";", input.value);
    } else {
        tasks = input.value;
    }
    localStorage.setItem("tasks", tasks);

    console.log("Task added!");
});

if (tasks) {
    emptyMsg.style.display = "none";
    const taskList = tasks.split(";");
    console.log("TaskList: ", taskList);

    for (let i = 0; i < taskList.length; i++) {
        let li = document.createElement("li");
        li.className = "list-item";
        li.innerHTML = `
            <div class="content">
                <input type="checkbox">
                <span>${taskList[i]}</span>
            </div>
            <button class="btn-delete">
                <i class="far fa-trash-alt"></i>
            </button>
        `;

        li.querySelector(".btn-delete").addEventListener("click", function () {
            const taskValue = li.querySelector(".content span").textContent;
            console.log("taskValue: ", taskValue);
            const index = taskList.indexOf(taskValue);
            console.log("index: ", index);
            if (index > -1) {
                taskList.splice(index, 1);
            }
            localStorage.setItem("tasks", taskList.join(";"));
            tasks = localStorage.getItem("tasks");
            console.log("tasks after remove ", tasks);
            console.log("type of task ", typeof tasks);
            if (taskList.length === 0) {
                emptyMsg.style.display = "block";
                localStorage.removeItem("tasks"); // Xóa luôn khỏi localStorage để tránh lưu trữ dữ liệu rỗng
            }
            li.remove();
            input.focus();
        });

        ul.appendChild(li);
    }
} else {
    emptyMsg.style.display = "block";
}

function deleteTask() {
    console.log("Click: ", li);
}
