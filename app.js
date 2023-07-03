var generator=()=>{
   var sDetails={
     name:document.querySelector('#name').value,
    age:document.querySelector('#age').value,
    gender:document.querySelector('.gender').value,
    clas:document.querySelector('#class').value,
    mark:document.querySelector('.mark').value,
    bimg:"https://static6.depositphotos.com/1002007/664/i/450/depositphotos_6646061-stock-photo-portrait-of-boy.jpg",
    gimg:"https://images.unsplash.com/photo-1610882587765-f0439630a659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybCUyMGtpZHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
   };
   var divTag=document.querySelector("div");
   divTag.setAttribute("class","HeaderReport");
   divTag.innerHTML="PROGRESS CARD";
   document.querySelector(".pageGenerator").append(divTag);
 
   var ulTag=document.createElement('ul');
   ulTag.setAttribute("class","first");
   var litag1=document.createElement('li');
   litag1.setAttribute("class","child");
   litag1.innerHTML="Student Name:"+sDetails.name;
   ulTag.append(litag1);
   var litag2=document.createElement('li');
   litag2.setAttribute("class","child");
   litag2.innerHTML="Student Age:"+sDetails.age;
   ulTag.append(litag2);
   var litag3=document.createElement('li');
   litag3.setAttribute("class","child");
   litag3.innerHTML="Gender:"+sDetails.gender;
   ulTag.append(litag3);
   var litag4=document.createElement('li');
   litag4.setAttribute("class","child");
   litag4.innerHTML="CLASS:"+sDetails.clas;
   ulTag.append(litag4);
   var litag5=document.createElement('li');
   litag5.setAttribute("class","child");
   litag5.innerHTML="Student Mark:"+sDetails.mark;
   ulTag.append(litag5);
   document.querySelector(".pageGenerator").append(ulTag);
   

};