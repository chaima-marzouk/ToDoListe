let nom = document.getElementById('project_name');
let description = document.getElementById('project_description');
let paragraphe = document.getElementById('project_title');
let btnn = document.getElementById('add_project_btn')


class Project{
    constructor(id,nom,description){
        
        this.nom = nom.value;
        this.description = description.value;
    }

    showProject = () => {
        let newProjct = localStorage.getItem("new Project");
        paragraphe.innerText = JSON.parse(newProjct);
    }

    addProject= () => {

        btnn.addEventListener('click' ,function(){
            let project = new Project(nom,description);
            paragraphe.innerText = project.nom;
           
            let myProject = {
               "projectName" : project.nom,
               "projectDescription" : project.description,
               "tasks" : project.tasks
           
            }
           
            localStorage.setItem("new Project", JSON.stringify(myProject));
            console.log(project.showProject);
           })
    }
}




