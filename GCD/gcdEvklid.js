function gcdEvklid () {

	let a = parseInt(prompt('Input number a = '));
	let b = parseInt(prompt('Input number b = '));
	let min = undefined;
	let gcd = 1;

	if (a === b) {
		alert(`Greatest common divisor = ${a}`);
		return true;
	}

	if (a > b) {
		min = b;
	} else {
		min = a;
	}

	while (min) {

		if (a>b) {
			a -= b;
		} else if (b>a){
			b -= a;
		} else if (a === b) {
			gcd = a;
			break;
		}

		min--;
	}

	alert(`Greatest common divisor = ${ gcd }`);

	console.log('a', a);
	console.log('b', b);
}

gcdEvklid();