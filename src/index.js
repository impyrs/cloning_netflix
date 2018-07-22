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
    parentList.removeChild(listItem);

    completeList.prepend(listItem);
    addEvents(listItem, uncompleteToDo);
};

const uncompleteToDo = event => {
    const button = event.target;
    const listItem = button.parentElement;
    const parentList = listItem.parentElement;
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
    console.log("edit");
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

    // Why?
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