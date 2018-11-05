function gcd () {

	let a = parseInt(prompt('a='));
	let b = parseInt(prompt('b='));
	let min = undefined;

	if (a === b) {
		alert(`Greatest common divisor=${a}`);
		return true;
	}

	if (a > b) {
		min = b;
	} else {
		min = a;
	}

	for (let i = min; i >= 0; i--) {
		
	}

	console.log('a', a);
	console.log('b', b);
}

gcd();