
function addvariable()
{
	var name = document.getElementById("varname").value;
	var type = document.getElementById("vartype").value;
	var method = document.getElementById("varmethod").value;
	var object = {'name':name,'type':type,'method':method};

	location.href = "../templates/dashboard.html";
}