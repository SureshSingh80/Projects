let task=[];
let editedData;
document.querySelector(".submit").addEventListener("click",function()
{
    let ans=document.getElementById("inpdata").value;
    if(ans!='') {
     task.push(ans);
     editedData=ans;
    }
   
});


// clear input field after submitting task
document.querySelector(".btn-submit").addEventListener("click",function()
{
    document.getElementById("inpdata").value="";
});


// to display all task
document.querySelector(".show-btn").addEventListener("click",function()
{
   if(task.length>0)
      document.querySelector(".container2").style="visibility:visible";
   
// every click erase all container2 element  
  document.querySelector(".container2").innerHTML="";
  for(let i=0;i<task.length;i++){
       // create new Element
      let newEl=document.createElement("span");
       newEl.style="display:block";
       let editBtn=document.createElement("button");
       let removeBtn=document.createElement("button");

       // add class in new Element
      newEl.classList.add("span"+(i+1));
      newEl.classList.add("dellspan"+(i+1));
       editBtn.classList.add("edit-btn");
       editBtn.classList.add("edit-btn"+(i+1));
       removeBtn.classList.add("remove-btn");
       removeBtn.classList.add("remove-btn"+(i+1));

       // add text in new Element
       newEl.innerText=task[i];
       editBtn.innerText="Edit";
       removeBtn.innerText="Delete";

       // append to container
       document.querySelector(".container2").append(newEl);
       document.querySelector(".container2").append(removeBtn);
       document.querySelector(".container2").append(editBtn);
       
    }
    // to delete
        for(let j=0;j<task.length;j++) {
             document.querySelector(".remove-btn"+(j+1)).addEventListener("click",function()
             {
                 
               
                 document.querySelector(".dellspan"+(j+1)).style="display:none";
                 document.querySelector(".remove-btn"+(j+1)).style="display:none";
                 document.querySelector(".edit-btn"+(j+1)).style="display:none";   
               
             });
        }
    // to edit
    
    for(let j=0;j<task.length;j++) {
           let targetTask;
             
            document.querySelector(".edit-btn"+(j+1)).addEventListener("click",function()
            {
                
                targetTask=document.querySelector(".span"+(j+1)).innerText;
                document.querySelector("#inpdata").value=targetTask;

                document.querySelector(".btn-submit").addEventListener("click",function()
                {
                    
                    document.querySelector(".span"+(j+1)).innerText=editedData;
                    document.querySelector(".edit-btn"+(j+1)).innerText="Edited";
                    document.querySelector(".span"+(j+1)).classList.remove("span"+(j+1));

                    
                });
               
                
            });
          
          
           
    }
    
        
    
    
});



