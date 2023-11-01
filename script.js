function addacademicfield(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("academicarea");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter here");
    
    let aqobj = document.getElementById("aq");
    let aqbtnobj = document.getElementById("academic-btn");
    aqobj.insertBefore(newNode, aqbtnobj);
}

function addskillsfield(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skillsarea");
    newNode.classList.add("mt-3");
    newNode.setAttribute("placeholder", "Enter here");
    
    let skobj = document.getElementById("sk");
    let skbtnobj = document.getElementById("skills-btn");
    skobj.insertBefore(newNode, skbtnobj);
}

function addworkfield(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("workarea");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");
    
    let weobj = document.getElementById("we");
    let webtnobj = document.getElementById("work-btn");
    weobj.insertBefore(newNode, webtnobj);
}

function addprojectfield(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("projectarea");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");
    
    let projobj = document.getElementById("proj");
    let projbtnobj = document.getElementById("project-btn");
    projobj.insertBefore(newNode, projbtnobj);
}

function addcertificationfield(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("certificationarea");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");
    
    let certifyobj = document.getElementById("certify");
    let certifybtnobj = document.getElementById("certifications-btn");
    certifyobj.insertBefore(newNode, certifybtnobj);
}

function generate(){
    document.getElementById("res-name").innerHTML = document.getElementById("name").value;
    document.getElementById("res-contact").innerHTML = document.getElementById("contact").value;
    document.getElementById("res-address").innerHTML = document.getElementById("address").value;
    document.getElementById("res-email").innerHTML = document.getElementById("email").value + " | ";
    document.getElementById("res-github").innerHTML = document.getElementById("github").value + " | ";
    document.getElementById("res-linkedin").innerHTML = document.getElementById("linkedin").value;
    document.getElementById("res-objective").innerHTML = document.getElementById("objective").value;
   
    let qualification = document.getElementsByClassName("academicarea");
    let str1 = "";
    for(let e of qualification) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("res-academic").innerHTML = str1;

    let skills = document.getElementsByClassName("skillsarea");
    let str2 = "";
    for(let e of skills) {
        str2 = str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById("res-skills").innerHTML = str2;

    let work = document.getElementsByClassName("workarea");
    let str3 = "";
    for(let e of work) {
        str3 = str3 + `<li> ${e.value} </li>`;
    }
    document.getElementById("res-experience").innerHTML = str3;

    let project = document.getElementsByClassName("projectarea");
    let str4 = "";
    for(let e of project) {
        str4 = str4 + `<li> ${e.value} </li>`;
    }
    document.getElementById("res-projects").innerHTML = str4;

    let certification = document.getElementsByClassName("certificationarea");
    let str5 = "";
    for(let e of certification) {
        str5 = str5 + `<li> ${e.value} </li>`;
    }
    document.getElementById("res-certifications").innerHTML = str5;

    document.getElementById("generator-form").style.display = 'none';
    document.getElementById("resume-template").style.display = 'block';

}

