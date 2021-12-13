const addTaskBtn = document.getElementById("addTask");
const stepBtn = document.getElementById("step");
const titleTask = document.getElementById("titleTask");
const descriptionTask = document.getElementById("descriptionTask");
const dateTask = document.getElementById("dateTask");
const idProject = document.getElementById("idProject");
const ParentContainer = document.getElementById("pending");
const ParentContainerInProgress = document.getElementById("inProgress");



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
        const  allTasks = JSON.parse(localStorage.getItem("task")) ?? [];
        let newTask = {
            id:this.id, title:this.title, description:this.description, date:this.date
        }

        allTasks.push(newTask);
        localStorage.setItem("task", JSON.stringify(allTasks));
        console.log("nnnnnnpusuhn", allTasks)
        
        /*newTaskArray = [...newTaskArray, newTask];
        const newd = JSON.stringify(newTaskArray);
        const newP = JSON.parse(newd);
        console.log("newTask objet",JSON.stringify(newTask));
        console.log("newTask ARRAY",JSON.stringify(newTaskArray));
        console.log("newTask ARRAY parse", newP);*/
        /*const allTasks = JSON.parse(localStorage.getItem("task")) ?? [];
        allTasks.push({id:this.id, title:this.title, description:this.description, date:this.date});
        localStorage.setItem("task", JSON.stringify(allTasks));*/
    }

    static showAllTask() {
        if (localStorage.getItem("task")) {
            JSON.parse(localStorage.getItem("task")).map((item)=>{
                Task.showHtml(item.title, item.description, item.id);
            })
        }
    }


    step(taskDiv){

        const  allTasks = JSON.parse(localStorage.getItem("task"));
        console.log("azaz",allTasks)
        const baliseP = taskDiv.getElementsByTagName('p');
        const timeStampId = baliseP[1].innerText;
        const objectID = allTasks.filter(item => item.id === JSON.parse(timeStampId) );
        console.log("objecttid",objectID)

        Task.showHtml()
        console.log(timeStampId)
    }

    static btnPending(taskDiv){
        const newTask = new Task()
        const btn = document.createElement("BUTTON");
        btn.onclick =  function () {
            /*const  allTasks = JSON.parse(localStorage.getItem("task"));
            console.log("azaz",allTasks)
            const baliseP = taskDiv.getElementsByTagName('p');
            const timeStampId = baliseP[1].innerText;
            const objectID = allTasks.filter(item => item.id === JSON.parse(timeStampId) );
            console.log(objectID)

            console.log(timeStampId)*/
            newTask.step(taskDiv);
            console.log("taatatatat", taskDiv)
            ParentContainerInProgress.appendChild(taskDiv);
        }
        btn.innerHTML = "CLICK ME";
        ParentContainer.appendChild(btn);
    }

    
    static showHtml(title, description, id) {
        //const newTask = new Task()
        const taskDiv = document.createElement("div");
        /*const btn = document.createElement("BUTTON");
        
        btn.onclick =  function () {
            /*const  allTasks = JSON.parse(localStorage.getItem("task"));
            console.log("azaz",allTasks)
            const baliseP = taskDiv.getElementsByTagName('p');
            const timeStampId = baliseP[1].innerText;
            const objectID = allTasks.filter(item => item.id === JSON.parse(timeStampId) );
            console.log(objectID)

            console.log(timeStampId)
            newTask.step(taskDiv)
        }*/
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
                    
        `;
        //btn.innerHTML = "CLICK ME"; 
        ParentContainer.appendChild(taskDiv);
        //ParentContainerInProgress.appendChild(taskDiv);
        //Task.testb(taskDiv);
        Task.btnPending(taskDiv)
        //ParentContainer.appendChild(btn);
        return this;
    }
   
}

Task.showAllTask();

addTaskBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    const id = Date.now();
    let newTask = new Task(titleTask.value, descriptionTask.value, dateTask.value, id);
    //localStorage.setItem("task", JSON.stringify(newTask));
     
    newTask.showTask().storeTask();
    titleTask.value = '';
    descriptionTask.value = '';
    dateTask.value = '';
})