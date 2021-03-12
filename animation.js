var id=null;
function movement()
{
    var element=document.getElementById("animation");
    var position=0;
    clearInterval(id);
    id=setInterval(frame,5);
    function frame()
    {
        if(position==400)
        {
            clearInterval(id);
        }
        else
        {
            position+=1;
            element.style.top=position+"px";
            element.style.left=position+"px";
        }
    }
}