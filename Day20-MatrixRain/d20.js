var s = window.screen;
var c = document.getElementById("c");
var ctx = c.getContext("2d");

var speed = 69;

var width = (c.width = s.width);
var height = (c.height = s.height);
var run;
var matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789#$%^&*()*&^%";

matrix = matrix.split("");

var columns = c.width / 25;
var drops = [];
for (var x = 0; x < columns; x++) drops[x] = 1;

function draw() {
	ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
	ctx.fillRect(0, 0, c.width, c.height);
	ctx.fillStyle = "#0F0";
	ctx.font = 25 + "px monospace";
	for (var i = 0; i < drops.length; i++) {
		var text = matrix[Math.floor(Math.random() * matrix.length)];
		ctx.fillText(text, i * 25, drops[i] * 25);
		if (drops[i] * 25 > c.height && Math.random() > 0.975) drops[i] = 0;
		drops[i]++;
	}
}
function loop() {
	run = setInterval(function () {
		draw();
	}, speed);
}
loop();
