const addTaskBtn = document.getElementById("addTask");
const stepBtn = document.getElementById("step");
const titleTask = document.getElementById("titleTask");
const descriptionTask = document.getElementById("descriptionTask");
const dateTask = document.getElementById("dateTask");
const idProject = document.getElementById("idProject");
const ParentContainer = document.getElementById("pending");
const ParentContainerInProgress = document.getElementById("inProgress");
const editTaskBtn = document.getElementById("editTask");
// const taskDiv = document.getElementById(taskDiv);



class Task {
    constructor(title, description, date, id) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.id = id;
    }



    showTask() {
        Task.showHtml(this.title, this.description, this.id);
        return this;
    }

    storeTask() {
        const allTasks = JSON.parse(localStorage.getItem("task")) ?? [];
        let newTask = {
            id:this.id, title:this.title, description:this.description, date:this.date
        }

        allTasks.push(newTask);
        localStorage.setItem("task", JSON.stringify(allTasks));
    }

    static showAllTask() {
        if (localStorage.getItem("task")) {
            JSON.parse(localStorage.getItem("task")).map((item)=>{
                Task.showHtml(item.title, item.description, item.id);
            })
        }
    }


    step(taskDiv){

        const allTasks = JSON.parse(localStorage.getItem("task"));
        const baliseP = taskDiv.getElementsByTagName('p');
        const timeStampId = baliseP[1].innerText;
        const objectID = allTasks.filter(item => item.id === JSON.parse(timeStampId));

        Task.showHtml()
    }

    static btnPending(taskDiv){
        const newTask = new Task()
        const btn = document.createElement("BUTTON");
        btn.onclick =  function () {
            newTask.step(taskDiv);
            ParentContainerInProgress.appendChild(taskDiv);
        }
        btn.innerHTML = "Pass to in progress";
        btn.setAttribute("class", "btn btn-primary mt-2");
        ParentContainer.appendChild(btn);
    }

    static deleteTask(id) {
        const  allTasks = JSON.parse(localStorage.getItem("task")) ?? [];
        const filtered = allTasks.filter(Task => Task.id !== id);
        localStorage.setItem('task', JSON.stringify(filtered));
        location.reload();
        
    }

    static editTask(id) {
        console.log(`ID: ${id}`);
        const  allTasks = JSON.parse(localStorage.getItem("task")) ?? [];
        const taskForEdit = allTasks.filter(Task => Task.id == id);
        const formUpdateTask = document.createElement("form");
        console.log(taskForEdit[0]);

        formUpdateTask.innerHTML = `
                                    <input type="text" value="${taskForEdit[0].title}" id="titleTask"/>
                                    <textarea id="descriptionTask">${taskForEdit[0].description}</textarea>
                                    <input type="text" id="dateTask" value="${taskForEdit[0].date}" />
                                    <input type="hidden" id="idProject" value="${id}" />
                                    <input type="button" class="btn btn-secondary" value="Update Task" id="addTask" />`;
        taskDiv.appendChild(formUpdateTask);
    }

    static showHtml(title, description, id) {
        const taskDiv = document.createElement("div");
        taskDiv.setAttribute("id", "taskDiv");
        taskDiv.innerHTML = `
                    <h5>
                        ${title === undefined? '' : title}
                    </h5>
                    <p>
                        ${description === undefined ? '' : description }
                    </p>
                    <p id="timestamp">
                        ${id === undefined ? '' : id}
                    </p>
                    <button class="btn btn-danger" onclick="Task.deleteTask(${id})"> 
                    Delete
                    </button>
                    <button id="editTask" class="btn btn-success" onclick="Task.editTask(${id})">
                        Edit
                    </button>
                    
        `;
        ParentContainer.appendChild(taskDiv);
        Task.btnPending(taskDiv)
        return this;
    }

}

Task.showAllTask();

addTaskBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    const id = Date.now();
    let newTask = new Task(titleTask.value, descriptionTask.value, dateTask.value, id);
    
    newTask.showTask().storeTask();
    titleTask.value = '';
    descriptionTask.value = '';
    dateTask.value = '';
})
