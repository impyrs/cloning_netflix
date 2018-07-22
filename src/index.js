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
        <li>
            <input type="checkbox">
            <label>Go to the gym</label>
            <button>delete</button>
            <button>edit</button>
        </li>
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

const createListItem = (text) => {
    const listItem = document.createElement("li");
    const input = document.createElement("input");
    const label = document.createElement("label");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    label.innerHTML = text;
    
    input.type = "checkbox";
    editBtn.innerHTML = "Edit";
    deleteBtn.innerHTML = "Del"

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

const compleToDo = event => {
    console.log("complete");
};

const deleteToDo = event => {
    console.log("delete");
}

const editTodo = event => {
    console.log("edit");
}

const addEvents = (listItem, checkboxFn) => {

    checkBox.onclick = checkboxFn; // Attaching Event to CheckBox
};

form.addEventListener("submit", handleFormSubmit);
// submit 클릭할 때 마다 handleFormSubmit 수행