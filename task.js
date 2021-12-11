const addTaskBtn = document.getElementById("addTask");
const titleTask = document.getElementById("titleTask");
const descriptionTask = document.getElementById("descriptionTask");
const dateTask = document.getElementById("dateTask");
const idProject = document.getElementById("idProject");
const ParentContainer = document.getElementById("pending");


class Task {
    constructor(title, description, date) {
        this.title = title;
        this.description = description;
        this.date = date;
    }

    showTask() {
        const taskDiv = document.createElement("div");
        taskDiv.innerHTML = `
                    <h5>
                        ${this.title}
                    </h5>
                    <p>
                        ${this.description}
                    </p>
                    <p>
                        ${this.date}
                    </p>
        `;
        ParentContainer.appendChild(taskDiv);
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