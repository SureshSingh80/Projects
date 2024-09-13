let slides=document.querySelectorAll(".slide");
let next=document.querySelector(".next");
let prev=document.querySelector(".prev");
let counter=0;
let slideImage=()=>{
    slides.forEach((slide)=>{
         slide.style.transform=`translateX(-${counter*100}%)`;
    });
}
next.addEventListener("click",function () {
     counter=counter+1===slides.length?0:counter+1;
     slideImage();
  });
prev.addEventListener("click",function(){
    counter=counter-1<0?slides.length-1:counter-1;
    slideImage();
});
let autoClick=()=>{
    next.click();
}
setInterval(autoClick,2000);
