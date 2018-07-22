import './styles.css'; // ES6에서는 이런식으로 css파일을 import 해주어야 한다.
// 현재 경로도 . 으로 반드시 표시해 주어야 한다. styles.css라고 하면 에러 발생한다.

const app = document.getElementById("js-app");
app.innerHTML=`
<h1>To Do App</h1>
<form class="js-form">
    <input type="text" placeholder="Write to do"/>
    <input type="submit" value="Add to do" />
</form>
<div class="js-uncompleted">
    <h2>Uncompledted</h2>
    <ul>
    </ul>
</div>

<div class="js-completed">
    <h2>Completed</h2>
    <ul>
    </ul>
</div>
`;

const form = document.querySelector(".js-form");
const input = form.querySelector("input[type='text']");
const uncompleteList = document.querySelector('.js-uncompleted ul');
const completeList = document.querySelector('.js-completed ul');

const completeToDo = event => {
    const button = event.target;
    const listItem = button.parentElement;
    const parentList = listItem.parentElement;
    
    listItem.classList.add("completed"); // css를 위함
    parentList.removeChild(listItem);    
    completeList.prepend(listItem);
    addEvents(listItem, uncompleteToDo);
};

const uncompleteToDo = event => {
    const button = event.target;
    const listItem = button.parentElement;
    const parentList = listItem.parentElement;

    listItem.classList.remove("completed"); // css를 위함
    parentList.removeChild(listItem);
    uncompleteList.prepend(listItem);
    addEvents(listItem, completeToDo);
};

const deleteToDo = event => {
    const button = event.target;
    const listItem = button.parentElement;
    const parentList = listItem.parentElement;
    parentList.removeChild(listItem);
};

const editTodo = event => {
    const listItem = event.target.parentElement;
    const label = listItem.querySelector("label");
    const newValue = prompt("Edit To Do", label.innerHTML);
    // 새로운 입력 값이 비어 있으면 바로 끝낸다.
    if(newValue == "")
    {
        alert("Can't input empty value");
        return;
    }
    label.innerHTML = newValue;
};


const createListItem = (text) => {
    const listItem = document.createElement("li");
    const input = document.createElement("input");
    const label = document.createElement("label");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    editBtn.classList.add("js-edit");
    deleteBtn.classList.add("js-delete");

    label.innerHTML = text;    
    input.type = "checkbox";
    editBtn.innerHTML = "Edit";
    deleteBtn.innerHTML = "Del"

    // Why? 왜 필요한지 잘 모르겠음.
    input.name = "check";
    label.htmlFor = "check";

    listItem.appendChild(input);
    listItem.appendChild(label);
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);

    return listItem;
}

const handleFormSubmit = (event) => {
    event.preventDefault();
    // 비어 있는 입력은 받으면 함수를 끝내버린다..
    if(input.value == ""){
        alert("Can't input empty value");
        return;
    }
    const task = createListItem(input.value);
    uncompleteList.prepend(task);
    addEvents(task, completeToDo);
    input.value = "";
};


const addEvents = (listItem, checkboxFn) => { // checkboxFn은 어떤 상황에서 check 하느냐에 따라 다르다.
    const editBtn = listItem.querySelector("button.js-edit");
    const deleteBtn = listItem.querySelector("button.js-delete");
    const checkBox = listItem.querySelector("input[type='checkbox']");

    editBtn.onclick = editTodo;
    deleteBtn.onclick = deleteToDo;
    checkBox.onclick = checkboxFn; // Attaching Event to CheckBox
};

form.addEventListener("submit", handleFormSubmit);
// submit 클릭할 때 마다 handleFormSubmit 수행