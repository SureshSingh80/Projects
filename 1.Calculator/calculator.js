// for calculation and display
var value="";
// target every element
var display=document.querySelector(".display");
document.querySelector(".AC").addEventListener("click",function()
{
    value="";
    display.innerHTML=value;
});
var undo=document.querySelector(".DE");
document.querySelector(".point").addEventListener("click",function()
{
   value=value+".";
   display.innerHTML=value;
});
document.querySelector(".divide").addEventListener("click",function()
{
    value=value+"/";
    display.innerHTML=value; 
});
document.querySelector(".seven").addEventListener("click",function()
{
    value=value+"7";
    display.innerHTML=value; 
});
document.querySelector(".eight").addEventListener("click",function()
{
    value=value+"8";
    display.innerHTML=value;
});
document.querySelector(".nine").addEventListener("click",function()
{
    value=value+"9";
    display.innerHTML=value;
});
document.querySelector(".multiply").addEventListener("click",function()
{
    value=value+"*";
    display.innerHTML=value;
});
document.querySelector(".four").addEventListener("click",function(){
   value=value+"4";
   display.innerHTML=value;
});
document.querySelector(".five").addEventListener("click",function()
{
    value=value+"5";
    display.innerHTML=value;   
});
document.querySelector(".six").addEventListener("click",function()
{
    value=value+"6";
    display.innerHTML=value;   
});
document.querySelector(".minus").addEventListener("click",function()
{
    value=value+"-";
    display.innerHTML=value;   
});
document.querySelector(".one").addEventListener("click",function()
{
    value=value+"1";
    display.innerHTML=value;   
});
document.querySelector(".two").addEventListener("click",function()
{
    value=value+"2";
    display.innerHTML=value;   
});
document.querySelector(".three").addEventListener("click",function()
{
    value=value+"3";
    display.innerHTML=value;   
});
document.querySelector(".plus").addEventListener("click",function()
{
    value=value+"+";
    display.innerHTML=value;   
});
document.querySelector(".power").addEventListener("click",function()
{
    value=value+"^";
    display.innerHTML=value;   
});
document.querySelector(".zero").addEventListener("click",function()
{
    value=value+"0";
    display.innerHTML=value;   
});
document.querySelector(".fact").addEventListener("click",function()
{
    value=value+"!";
    display.innerHTML=value;   
});

document.querySelector(".equal").addEventListener("click",function()
{
    var ans=1;
    if(value[1]=="^"||value[2]=="^"||value[3]=="^") {
        
        if(value[1]=="^"){
            var a=value[0];
            var b=value[2];
            for(i=1;i<=b;i++)
                ans=ans*a;
        }
       else if(value[2]=="^"){
            var a=value[0];
            a=(a*10)+value[1]*1;
            var b=value[3];
            for(i=1;i<=b;i++)
                ans=ans*a;
        }
       else if(value[3]=="^")
        {
            var a=value[0];
            a=a*10+value[1]*1;
            a=a*10+value[2]*1;
            
            var b=value[4];
            for(i=1;i<=b;i++)
                ans=ans*a;
        }
    }
    else if(value[1]=="!"||value[2]=="!")
    {
        if(value[1]=="!")
          {
             var a=value[0];
             for(i=a;i>=1;i--)
                 ans=ans*i;
          }
        else if(value[2]=="!")
        {
            var a=value[0];
            a=a*10+value[1]*1;
            for(i=a;i>=1;i--)
                 ans=ans*i;
        }
    }
    else
       ans=eval(value);
       display.innerHTML=ans;
    
    // after display answer need to reset
    value="";
});




