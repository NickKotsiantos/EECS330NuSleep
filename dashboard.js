

function graph(val)
{
    var str = "var".concat(val);
    var str2 = "varbtn".concat(val);
    var element = document.getElementById(str);
    var allelements = document.getElementsByClassName("col");
    var elementbtn = document.getElementById(str2);
    var updatebtn = document.getElementById("update_button");
    var tempplot = document.getElementById("tempplot");

    for(var i=0;i<allelements.length;i++)
    {
    	allelements[i].style.display = "none";	
    }
    updatebtn.style.display = "none";
    element.style.display = "block";	
    elementbtn.style.backgroundColor = "slategrey";
    tempplot.style.opacity = 1;
}