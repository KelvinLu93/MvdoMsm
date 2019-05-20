function adjustClock() {
	var d = new Date();
	
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	var hdeg = h*30 + m/2;
	
	hh.style.transform = "rotate("+hdeg+"deg)";
	mh.style.transform = "rotate("+m*6+"deg)";
}

window.addEventListener("load", function() {
	setInterval(adjustClock, 1000);
});