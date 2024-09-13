let x=document.querySelector("#X");
let y=document.querySelector("#Y");
let z=document.querySelector("#Z");
let cal=document.querySelector("button");
let showResult=document.querySelector(".show-result");

cal.addEventListener("click",()=>{
    
    let total_num=y.value;
    let percen=x.value;
    if(total_num==""|| percen=="")
        showResult.innerHTML="Input field can't be empty";
    else 
    {
        let ans=total_num*percen/100;

        let span=document.createElement("span");
        span.innerHTML=ans;
        span.classList.add("ans");

        z.value=ans;

        showResult.innerHTML=percen+"% of "+total_num+" is ";
        showResult.append(span);
    }
});




