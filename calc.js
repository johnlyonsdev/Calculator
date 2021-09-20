const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	console.log("mathsymbol ", mathSymbol)
	console.log("num 1 ", num1)
	console.log("num2 ", num2)

	if (mathSymbol === "+") {
		console.log(num1 + num2)
	}

	if (mathSymbol === "-") {
		console.log(num1 - num2)
	}

	if (mathSymbol === "*") {
		console.log(num1 * num2)
	}

	if (mathSymbol === "/") {
		console.log(num1 / num2)
	}

	if (mathSymbol === "sqrt") {
		let sqrt = Math.sqrt(num1)
		console.log(sqrt)
	}

	if (mathSymbol === "square") {
		let square = Math.pow(num1, 2)
		console.log(square)
	}
	// This line closes the connection to the command line interface.
	reader.close()

});

