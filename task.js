const addTaskBtn = document.getElementById("addTask");
const stepBtn = document.getElementById("step");
const titleTask = document.getElementById("titleTask");
const descriptionTask = document.getElementById("descriptionTask");
const dateTask = document.getElementById("dateTask");
const idProject = document.getElementById("idProject");
const ParentContainer = document.getElementById("pending");
const ParentContainerInProgress = document.getElementById("inProgress");


class Task {
    constructor(title, description, date, id,btn) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.id = id;
        this.btn = btn;
        
    }

    showTask() {
        Task.showHtml(this.title, this.description, this.id ,this.btn);
        return this;
    }

    storeTask() {
        const  allTasks = JSON.parse(localStorage.getItem("task")) ?? [];
        let newTask = {
            id:this.id, title:this.title, description:this.description, date:this.date, disabled:this.btn
        }

        allTasks.push(newTask);
        localStorage.setItem("task", JSON.stringify(allTasks));
        console.log("nnnnnnpusuhn", allTasks)
    }

    static showAllTask() {
        if (localStorage.getItem("task")) {
            JSON.parse(localStorage.getItem("task")).forEach((item)=>{
                Task.showHtml(item.title, item.description, item.id);
            })
        }
    }


    static step(timeStampId, btnId){
        console.log("event", timeStampId)

        const  allTasks = JSON.parse(localStorage.getItem("task"));
        const objectID = allTasks.filter(item => item.id === JSON.parse(timeStampId) );

        console.log("btnPending ",btnId )


        switch (btnId) {
            case 'pending':
                if (objectID) {
                    const  encours = JSON.parse(localStorage.getItem("encours")) ?? [];
                    encours.push(objectID);
                    localStorage.setItem("encours", JSON.stringify(encours));
                    console.log("nnnnnnpusuhn", encours)

                    objectID.forEach((item)=>{
                        Task.showHtml(item.title, item.description, item.id, true);
                        console.log("teststtststtsb", btnId, item.id);
                        document.getElementById(`btnpending_${item.id}`).disabled = true; 
                        
                
                    }) 
                    
                   
            
                   
                    
                
                }           
            break;
            case 'inProgress':
            console.log('code ');   
              //expected output: "Mangoes and papayas are $2.79 a pound."
            break;
            default:
            console.log(`Sorry, we are out of ${btnId}.`);
        }
            
    }

    
    static showHtml(title, description, id, isButton) {
        const taskDiv = document.createElement("div");
        const pendingValue = ParentContainer.attributes[1].nodeValue;
        const inProgressValue = ParentContainerInProgress.attributes[1].nodeValue;
        console.log("taskDiv", taskDiv)
        const btnId = isButton === true ? inProgressValue : pendingValue
        const btnValue = isButton === true ? 'Fini' : 'En cours'

        taskDiv.innerHTML = `
                    <h5>
                        ${title === undefined? '' : title}
                    </h5>
                    <p>
                        ${description === undefined ? '' : description }
                    </p>
                    <p id="timestamp">
                        ${id === undefined ? '' : new Date(id).toString()}
                    </p>
                    <input type="button" onClick="Task.step('${id}','${btnId}')" class="btn btn-primary" value="${btnValue}" id="btn${btnId}_${id}" />
                    
        `;

        console.log(isButton)
        ParentContainer.appendChild(taskDiv)
        isButton === true ? ParentContainerInProgress.appendChild(taskDiv):null

        return this;
    }

   
}

Task.showAllTask();

addTaskBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    const id = Date.now();
    console.log(new Date(id).toString())
   
    let newTask = new Task(titleTask.value, descriptionTask.value, dateTask.value, id, "disabled");
    newTask.showTask().storeTask();

    titleTask.value = '';
    descriptionTask.value = '';
    dateTask.value = '';
})