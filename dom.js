class DOM {
    constructor() {
        
    }

}

    showProject = () => {
        let newProjct = localStorage.getItem("new Project");
        paragraphe.innerText = JSON.parse(newProjct);
    }





btnn.addEventListener('click' ,function(){
    
    function Counter() {
        let counter = 0;
    
        function IncreaseCounter() {
            return counter++;
        };
    
        return IncreaseCounter;
    }
    
    let id = Counter();  
    let project = new Project(id(),nom,description);
    paragraphe.innerText = project.nom;

    let myProject = {
        "projectName" : project.nom,
        "projectDescription" : project.description,
        "id" : id()

    }

    localStorage.setItem("new Project", JSON.stringify(myProject));
    console.log(project.showProject);
})



