let nom = document.getElementById('project_name');
let description = document.getElementById('project_description');
let paragraphe = document.getElementById('project_title');
let btnn = document.getElementById('add_project_btn')


class Project{
    constructor(id,nom,description){
        
        this.nom = nom.value;
        this.description = description.value;
        this.id = id();
    }

    showProject = () => {
        let newProjct = localStorage.getItem("new Project");
        paragraphe.innerText = JSON.parse(newProjct);
    }
}




btnn.addEventListener('click' ,function(e){
    
    function Counter() {
        let counter = 0;
    
        function IncreaseCounter() {
            return counter++;
        };
    
        return IncreaseCounter;
    }
    
 let id = Counter();  
 let project = new Project(id,nom,description);
 paragraphe.innerText = project.nom;

 let myProject = {
    "projectName" : project.nom,
    "projectDescription" : project.description,
    "id" : id()

 }

 localStorage.setItem("new Project", JSON.stringify(myProject));
 console.log(project.showProject);

 e.preventDefault();
})




