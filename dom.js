const nameProject = document.getElementById('project_name');
const description = document.getElementById('project_description');
const titleProject = document.getElementById('project_title');
const addProjectBtn = document.getElementById('add_project_btn');
const parentContainer = document.getElementById('Parent_Container');

class Project{
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


    static deleteProject(id) {
        const allProjects = JSON.parse(localStorage.getItem("projects")) ?? [];
        const filtered = allProjects.filter(project => project.id !== id);
        localStorage.setItem('projects', JSON.stringify(filtered));
        // Project.showAllProjects();

        location.reload();
    }

    static showHtml(id, name, description) {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-heading${id}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${id}" aria-expanded="false" aria-controls="flush-collapse${id}">
                            <div id="project_title">${name}</div>
                        </button>
                    </h2>
                    <div id="flush-collapse${id}" class="accordion-collapse collapse" aria-labelledby="flush-heading${id}" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <div id="header"> To Do List </div>
                            <button class="btn-danger" onclick="Project.deleteProject(${id})"> delete </button>
                            <div class="task-list task-container" id="pending">
                                <h3>A Faire</h3>
                                
                            </div>
                            <div class="task-list task-container" id="inProgress">
                                <h3>En cours</h3>
                            </div>
                            <div class="task-list task-container" id="completed">
                                <h3>Fini</h3>
                            </div>
                            <div class="task-list">
                                <h3>Add a task</h3>
                                <form id="todo-form">
                                    <input type="text" placeholder="Title" id="titleTask"/>
                                    <textarea placeholder="Description" id="descriptionTask"></textarea>
                                    <input type="date" id="dateTask" placeholder="Due Date (dd/mm/yyyy)" />
                                    <input type="text" id="idProject" value="${id}" placeholder="Due Date (dd/mm/yyyy)" />
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












































// const nom = document.getElementById('project_name');
// let description = document.getElementById('project_description');
// let paragraphe = document.getElementById('project_title');
// let btnn = document.getElementById('add_project_btn')


// class Project{
//     constructor(id,nom,description){
        
//         this.nom = nom.value;
//         this.description = description.value;
//         this.id = id();
//     }

//     // showProject = () => {
//     //     let newProjct = localStorage.getItem("new Project");
//     //     paragraphe.innerText = JSON.parse(newProjct);
//     // }
// }



// btnn.addEventListener('click' ,function(e){

    
    
//     function Counter() {
//         let counter = 0;
    
//         function IncreaseCounter() {
//             return counter++;
//         };
    
//         return IncreaseCounter;
//     }
    
//  let id = Counter();  
//  let project = new Project(id,nom,description);
//  paragraphe.innerText = project.nom;

//  let myProject = {
//     "projectName" : project.nom,
//     "projectDescription" : project.description,
//     "id" : id()

//  }

//  let localItems = JSON.parse(localStorage.getItem('localItem'))
//    if (localItems === null) {
//        projectsList = []
//    }else{
//     projectsList = localItems;
//    }
//    projectsList.push(project.nom)

//  localStorage.setItem("new Project", JSON.stringify(myProject));
//  console.log(projectsList);

//  e.preventDefault();
// })
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







