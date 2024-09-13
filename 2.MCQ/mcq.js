var firstpage=document.querySelector("#firstpage");
var secondpage=document.querySelector("#secondpage");
var thirdpage=document.querySelector("#thirdpage");
var fourthpage=document.querySelector("#fourthpage");
var fifthpage=document.querySelector("#fifthpage");
// Hide all page initially
secondpage.style.display="none";
thirdpage.style.display="none";
fourthpage.style.display="none";
fifthpage.style.display="none";
// Hide prev button initially
document.querySelector(".prev_btn").style.display="none";
// for tracking page
var count=1;

// Next button operation
document.querySelector(".next_btn").addEventListener("click",function()
{
    if(count<5)
       count++;
    if(count==2){
        firstpage.style.display="none";
        secondpage.style.display="";
        thirdpage.style.display="none";
        fourthpage.style.display="none";
        fifthpage.style.display="none";
        
    }
    if(count==3){
        firstpage.style.display="none";
        secondpage.style.display="none";
        thirdpage.style.display="";
        fourthpage.style.display="none";
        fifthpage.style.display="none";
    }
    if(count==4){
        firstpage.style.display="none";
        secondpage.style.display="none";
        thirdpage.style.display="none";
        fourthpage.style.display="";
        fifthpage.style.display="none";
    }
    if(count==5){
        firstpage.style.display="none";
        secondpage.style.display="none";
        thirdpage.style.display="none";
        fourthpage.style.display="none";
        fifthpage.style.display="";
    }
//    Hide prev and next button according to condition
    if(count==1)
     document.querySelector(".prev_btn").style.display="none";
    else if(count>1) 
     document.querySelector(".prev_btn").style.display="";
   if(count==5)
     document.querySelector(".next_btn").style.display="none";
   else if(count<5) 
     document.querySelector(".next_btn").style.display="";
    
});
// prev button operation
document.querySelector(".prev_btn").addEventListener("click",function()
{
     if(count>1)
       count--;

    if(count==1){
        firstpage.style.display="";
        secondpage.style.display="none";
        thirdpage.style.display="none";
        fourthpage.style.display="none";
        fifthpage.style.display="none";
        
    }
    if(count==2){
        firstpage.style.display="none";
        secondpage.style.display="";
        thirdpage.style.display="none";
        fourthpage.style.display="none";
        fifthpage.style.display="none";
        
    }
    if(count==3){
        firstpage.style.display="none";
        secondpage.style.display="none";
        thirdpage.style.display="";
        fourthpage.style.display="none";
        fifthpage.style.display="none";

    }
    if(count==4){
        firstpage.style.display="none";
        secondpage.style.display="none";
        thirdpage.style.display="none";
        fourthpage.style.display="";
        fifthpage.style.display="none";
    }
//  Hide prev and next button according to condition
    if(count==1)
     document.querySelector(".prev_btn").style.display="none";
    else if(count>1) 
     document.querySelector(".prev_btn").style.display="";
   if(count==5)
     document.querySelector(".next_btn").style.display="none";
   else if(count<5) 
     document.querySelector(".next_btn").style.display="";
   
});



var ans_sheet=new Array(21);
// initilize to 0
for(i=0;i<=20;i++)
    ans_sheet[i]=0;
// Answer validation
var count_ans=0;
document.querySelector("#Q1O4").addEventListener("click",function()
{
   
    if(ans_sheet[1]==0){
      count_ans++;
      ans_sheet[1]=1;
    }
});
document.querySelector("#Q2O2").addEventListener("click",function()
{
    
    if(ans_sheet[2]==0){
      count_ans++;
      ans_sheet[2]=1;
    }
});
document.querySelector("#Q3O3").addEventListener("click",function()
{
    
    if(ans_sheet[3]==0){
      count_ans++;
      ans_sheet[3]=1;
    }
});
document.querySelector("#Q4O2").addEventListener("click",function()
{
    
    if(ans_sheet[4]==0){
      count_ans++;
      ans_sheet[4]=1;
    }
    
});
document.querySelector("#Q5O1").addEventListener("click",function()
{
    
    if(ans_sheet[5]==0){
      count_ans++;
      ans_sheet[5]=1;
    }
    
});
document.querySelector("#Q6O1").addEventListener("click",function()
{
    
    if(ans_sheet[6]==0){
      count_ans++;
      ans_sheet[6]=1;
    }
});
document.querySelector("#Q7O2").addEventListener("click",function()
{
    
    if(ans_sheet[7]==0){
      count_ans++;
      ans_sheet[7]=1;
    }
});
document.querySelector("#Q8O3").addEventListener("click",function()
{
    
    if(ans_sheet[8]==0){
      count_ans++;
      ans_sheet[8]=1;
    }
});
document.querySelector("#Q9O3").addEventListener("click",function()
{
    
    if(ans_sheet[9]==0){
      count_ans++;
      ans_sheet[9]=1;
    }
});
document.querySelector("#Q10O2").addEventListener("click",function()
{
    
    if(ans_sheet[10]==0){
      count_ans++;
      ans_sheet[10]=1;
    }
});
document.querySelector("#Q11O1").addEventListener("click",function()
{
    
    if(ans_sheet[11]==0){
      count_ans++;
      ans_sheet[11]=1;
    }
});
document.querySelector("#Q12O2").addEventListener("click",function()
{
    
    if(ans_sheet[12]==0){
      count_ans++;
      ans_sheet[12]=1;
    }
});
document.querySelector("#Q13O1").addEventListener("click",function()
{
    
    if(ans_sheet[13]==0){
      count_ans++;
      ans_sheet[13]=1;
    }
});
document.querySelector("#Q14O4").addEventListener("click",function()
{
    
    if(ans_sheet[14]==0){
      count_ans++;
      ans_sheet[14]=1;
    }
});
document.querySelector("#Q15O2").addEventListener("click",function()
{
    
    if(ans_sheet[15]==0){
      count_ans++;
      ans_sheet[15]=1;
    }
});
document.querySelector("#Q16O3").addEventListener("click",function()
{
    
    if(ans_sheet[16]==0){
      count_ans++;
      ans_sheet[16]=1;
    }
});
document.querySelector("#Q17O1").addEventListener("click",function()
{
    
    if(ans_sheet[17]==0){
      count_ans++;
      ans_sheet[17]=1;
    }
});
document.querySelector("#Q18O4").addEventListener("click",function()
{
    
    if(ans_sheet[18]==0){
      count_ans++;
      ans_sheet[18]=1;
    }
});
document.querySelector("#Q19O2").addEventListener("click",function()
{
    
    if(ans_sheet[19]==0){
      count_ans++;
      ans_sheet[19]=1;
    }
});
document.querySelector("#Q20O1").addEventListener("click",function()
{
    
    if(ans_sheet[20]==0){
      count_ans++;
      ans_sheet[20]=1;
    }
    
});
// display the ans 
document.querySelector(".show_ansbtn").addEventListener("click",function()
{
   document.querySelector(".display").innerHTML="Total Score:"+count_ans;
});













