
function increment()
{
    const val=document.getElementById('value')
    var count=parseInt(val.innerHTML);
    count=count+1;
    if(count>0)
    {
        document.getElementById("decrease").disabled=false;
    }
    val.innerHTML=count;
   
}
function decrement()
{
    const val=document.getElementById('value')
    var count=parseInt(val.innerHTML);
    count=count-1;
    if(count==0)
    {
        document.getElementById("decrease").disabled=true;
    }
    val.innerHTML=count;
        
}