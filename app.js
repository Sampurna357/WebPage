var generator=()=>{
   var sDetails={
     name:document.querySelector('#name').value,
    age:document.querySelector('#age').value,
    gender:document.querySelector("input[name=Sgender]:checked").value,
    clas:document.querySelector('#class').value,
    mark:[]
   };
   console.log(sDetails);
   sDetails.mark.push(parseInt(document.querySelector("#mark1").value));
   sDetails.mark.push(parseInt(document.querySelector("#mark2").value));
   sDetails.mark.push(parseInt(document.querySelector("#mark3").value));
   sDetails.mark.push(parseInt(document.querySelector("#mark4").value));
   sDetails.mark.push(parseInt(document.querySelector("#mark5").value));
   sDetails.mark.push(parseInt(document.querySelector("#mark6").value));
   console.log(sDetails.mark);
   var gerGrade=()=>{
           var r=0;
           for(var i=0;i<sDetails.mark.length;i++){
                r+=sDetails.mark[i];
           }
           return r/sDetails.mark.length;
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
   var avg=gerGrade();
   if(avg>33){
      var litag6=document.createElement('li');
      litag6.setAttribute("class","child");
   litag6.innerHTML="You Passed The Exam SuccessFully";
   ulTag.append(litag6); 
   }
   else{
      var litag6=document.createElement('li');
      litag6.setAttribute("class","child");
   litag6.innerHTML="You Failed The Exam ";
   ulTag.append(litag6); 
   }
   document.querySelector(".pageGenerator").append(ulTag);

   

};