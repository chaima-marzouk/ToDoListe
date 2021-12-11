const addTaskBtn = document.getElementById("addTask");
const titleTask = document.getElementById("titleTask");
const descriptionTask = document.getElementById("descriptionTask");
const dateTask = document.getElementById("dateTask");
const pending = document.getElementById("pending");
console.log(pending);

class Task {
    constructor(title, description, date) {
        this.title = title;
        this.description = description;
        this.date = date;
    }

    showTask(title, description, date) {
        const task = document.createElement("div");
        dispatchEvent.innerHtml = `
            <h6>Task name</h6>
            <p>Task description</p>`;
        pending.appendChild(task);
        return this;
    }
}


addTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const newTask = new Task(titleTask.value, descriptionTask.value, dateTask.value);
    newTask.showTask();
    titleTask.value = '';
    descriptionTask.value = '';
    dateTask.value = '';
})