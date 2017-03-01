
function graph(val)
{
    var title = document.getElementById("optimal");
    var title2 = document.getElementById("optimal2");
    var backbtn = document.getElementById("backbtn");
    var addvar = document.getElementById("addvar");
    var allelements = document.getElementsByClassName("col");
    var tempplot = document.getElementById("tempplot");
    var content = document.getElementById("varcontent");
    val--;
    for(var i=0;i<allelements.length;i++)
    {
        allelements[i].style.display = "none"; 
    } 

    var value = document.getElementsByClassName("var-value")[val].innerHTML;
    var type = document.getElementsByClassName("var-type")[val].innerHTML;
    
    content.innerHTML = "Your Optimal " + type + ": " + value;
    content.style.display = "block";

    backbtn.style.display = "block";
    addvar.style.display = "none";
    tempplot.style.opacity = 1;
    title.style.display = "none";
    title2.style.display = "none";
    
}
