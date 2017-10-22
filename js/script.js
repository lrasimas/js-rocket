console.log('Sveiki');
var doCoolStuff = function () {
	var currentClassName = document.getElementById('cool').className;

	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool red';
	} else {
		document.getElementById('cool').className = 'cool';
	}

	//document.getElementById('cool').className = 'cool red';

}

var car = {
			make: 'BMW',
			type: '530',
			color: 'white',
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: [
					'seat1',
			 		'seat2',
			  		'seat3',
			   		'seat4'
			   ],
			   turnOn: function () {
			   	this.isTurnedOn = true;
			   },

			   fly: function () {
			   	alert('fly');
			   },

			   swithCar: function (isOn) {
			   	if (isOn == true) {
			   		this.isTurnedOn = true;
			   	} else {
			   		this.isTurnedOn = false;
			   	}
			   }
		};

