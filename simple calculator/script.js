let display = document.querySelector("#display");
 let buttons =   document.querySelectorAll("button");
 
 buttons.forEach(function(btn)
{
    btn.addEventListener("click",function()
{
    let value = btn.textContent;
 
    if(value==="RESULT")
    {
        try {
            display.textContent=eval(display.textContent);
        }
        catch{
            display.textContent="Error";
        }
        return;
    }
    if(value==="C")
    {
        display.textContent="";
        return;
    }
   
   display.textContent += value;
})
})

