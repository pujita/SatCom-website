// Data rates of 19.2Kbps, 320Kbps, 640Kbps, 5.12Mbps
var s71 = new Array(25.09, 12.87, 9.86, 0.83);
var s76 = new Array(23.95, 11.73, 8.72, -0.31);
var s81 = new Array(22.93, 10.72, 7.71, -1.33);
var s86 = new Array(22.03, 9.82, 6.81, -2.33);

var c71 = new Array(17.42, 5.20, 2.19, -6.84);
var c76 = new Array(16.28, 4.06, 1.05, -7.98);
var c81 = new Array(15.28, 3.07, -0.06, -8.98);
var c86 = new Array(14.4, 2.19, -0.82, -9.86);

var a71 = new Array(12.74, 0.52, -2.49, -11.52);
var a76 = new Array(11.64, -0.58, -3.59, -12.62);
var a81 = new Array(10.68, -1.53, -4.54, -13.58);
var a86 = new Array(9.86, -2.35, -5.36, -14.40);

// freq of 71, 76, 81, 86 GHz
var f71 = new Array(s71, c71, a71);
var f76 = new Array(s76, c76, a76);
var f81 = new Array(a81, c81, a81);
var f86 = new Array(s86, c86, a86);

var results = new Array(f71, f76, f81, f86);

function calculate() {
	var freq = document.getElementById("freq").valueAsNumber - 1;
	var location = document.getElementById("location").valueAsNumber - 1;
	var datarate = document.getElementById("datarate").valueAsNumber - 1;
	var result = results[freq][location][datarate];
	var htmlTag = document.getElementById("result");

	htmlTag.innerText = "System Link Margin : " + result + " dB";
	if(result < 0) {
		htmlTag.style.color = "#FF0000";
	} else {
		htmlTag.style.color = "#00FF00";
	}
}