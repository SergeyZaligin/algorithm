function gcd () {

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

	for (let i = min; i >= 0; i--) {
		if (a%i === 0 && b%i === 0) {
			gcd = i
			break;
		}

	}

	alert(`Greatest common divisor = ${ gcd }`);

	console.log('a', a);
	console.log('b', b);
}

gcd();