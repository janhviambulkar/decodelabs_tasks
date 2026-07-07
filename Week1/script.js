function searchJob(){

let job=document.getElementById("searchInput").value;

if(job==""){

alert("Please enter a job title.");

}
else{

alert("Searching for "+job);

}

}

const btn=document.getElementById("themeBtn");

btn.onclick=function(){

document.body.classList.toggle("dark");

}
