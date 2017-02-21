var change = false;

$(document).ready(function() {

	setInterval(function(){
		getTime();
	}, 50);

	function getTime() {
		var d = new Date();

		var s = d.getSeconds() + (d.getMilliseconds()/1000);
		var m = d.getMinutes();
		var h = hour12();

		$(".s-hand").css("transform", "translate(-50%, -100%) rotate(" + s*6 + "deg)");
		$(".m-hand").css("transform", "translate(-50%, -100%) rotate(" + m*6 + "deg)");
		$(".h-hand").css("transform", "translate(-50%, -100%) rotate(" + (h*30 + m*0.5) + "deg)");

		function hour12() {
			var hour = d.getHours();

			if(hour >= 12) {
				hour = hour-12;
			}

			if(hour == 0) {
				h = 12;
			}
			return hour;
		}
	}
});

function alarmFunct(){
	if(!change)
	{
	document.getElementById("setAlarm").style.display="none";
	document.getElementById("alarmSet").style.display="inline-block";
	change = true;

	var inputTime =document.getElementById("input").value;

	var timediv = document.getElementById("timeSet");
	timediv.innerHTML= inputTime;

	//document.getElementById("aTime")=document.getElementById("form1").elements[0].value;
	change = true;
	}
	else if(change){
		document.getElementById("setAlarm").style.display="inline-block";
		document.getElementById("alarmSet").style.display="none";

		change = false;
	}
}
