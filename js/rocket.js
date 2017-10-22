var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
	document.body.className = 'body-state'+state;
	clearInterval(timer);
	countdownNumber = 10;
document.getElementById
			('countdown').innerHTML = countdownNumber;

	if (state == 2) {
		countdownNumber = countdownNumber - 1;
		timer = setInterval(function () {
			document.getElementById
			('countdown').innerHTML = countdownNumber;

		if (countdownNumber <= -1) {		
			changeState(3);
}
		}, 300 );

} else if (state == 3) {
	var success = setTimeout (function ()
	{
		var randomNumber = Math.round(Math.random()*10);

console.log('randomNumber:', randomNumber)

		if (randomNumber > 5) {
			changeState(4);
		} else {
			changeState(5);
		}

	}, 2000);
	}
}
