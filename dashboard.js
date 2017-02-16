
function graph(val)
{
    var title = document.getElementById("optimal");
    var backbtn = document.getElementById("backbtn");
    var allelements = document.getElementsByClassName("col");
    var tempplot = document.getElementById("tempplot");
    val--;
    for(var i=0;i<allelements.length;i++)
    {
        if(val!=i)
        {allelements[i].style.display = "none"; } 
    } 

    backbtn.style.display = "block";
    tempplot.style.opacity = 1;
    title.style.display = "none";
    
}
