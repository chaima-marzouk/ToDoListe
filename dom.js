const nameProject = document.getElementById('project_name');
const description = document.getElementById('project_description');
const titleProject = document.getElementById('project_title');
const addProjectBtn = document.getElementById('add_project_btn');
const parentContainer = document.getElementById('Parent_Container');


class Project extends Task{
    constructor(id,name,description){
        
        this.name = name;
        this.description = description;
        this.id = id;
    }

    showProject() {
        Project.showHtml(this.id, this.name, this.description);
        return this;
    }

    storeProject() {
        const allProjects = JSON.parse(localStorage.getItem("projects")) ?? [];
        allProjects.push({id:this.id, name:this.name, description:this.description});
        localStorage.setItem("projects", JSON.stringify(allProjects));
    }

    static showAllProjects() {
        if (localStorage.getItem("projects")) {
            JSON.parse(localStorage.getItem("projects")).forEach((item)=>{
                Project.showHtml(item.id, item.name, item.description);
            })
        }
    }

    static showHtml(id, name, description) {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <div id="project_title">${name}</div>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <div id="header"> To Do List </div>
                            <div class="task-list task-container" id="pending">
                                <h3>Pending</h3>
                                
                            </div>
                            <div class="task-list task-container" id="inProgress">
                                <h3>In Progress</h3>
                            </div>
                            <div class="task-list task-container" id="completed">
                                <h3>Completed</h3>
                            </div>
                            <div class="task-list">
                                <h3>Add a task</h3>
                                <form id="todo-form">
                                    <input type="text" placeholder="Title" id="titleTask"/>
                                    <textarea placeholder="Description" id="descriptionTask"></textarea>
                                    <input type="text" id="dateTask" placeholder="Due Date (dd/mm/yyyy)" />
                                    <input type="button" class="btn btn-primary" value="Add Task" id="addTask" />
                                </form>
                                <input type="button" class="btn btn-primary" value="Clear Data" onclick="todo.clear();" />
                                <div id="delete-div">
                                    Drag Here to Delete
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        parentContainer.appendChild(div);
    }
}

Project.showAllProjects();

addProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let id = Math.floor(Math.random() * 1000000);
    const newProject = new Project(id,nameProject.value, description.value);
    newProject.showProject().storeProject();
    nameProject.value = '';
    description.value = '';
});








































// addProjectBtn.addEventListener('click' ,function(e){
    
//     e.preventDefault();
//     // function Counter() {
//     //     let counter = 0;
    
//     //     function IncreaseCounter() {
//     //         return counter++;
//     //     };
    
//     //     return IncreaseCounter;
//     // }
    

//     // let id = Counter();  
//     let project = new Project(nom,description);
//     paragraphe.innerText = project.nom;

//     let myProject = {
//         "projectName" : project.nom,
//         "projectDescription" : project.description,
//         // "id" : id()

//     }

// });






