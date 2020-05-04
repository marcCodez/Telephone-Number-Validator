function telephoneCheck(str) {
	//10 digits
	//11 digits (must start with a 1)
	//No symbols except "-" and "()" and spaces, brackets only groups first 3

	let startsWithOne = /^1/g;
	let elevenDigits = /^[1-9]{1,11}$/g;
	let tenDigits = /^[1-9]{1,10}$/g;
	let correctSymbols = /\s|\-/g;
	let correctBrackets = /\(\w+\)/g;

	let testS = str.replace(correctSymbols, "");
	console.log(testS);
	// If starts with 1
	if (
		correctBrackets.test(testS) === true &&
		startsWithOne.test(testS) === true
	) {
		return true;
	} // else if (){

	// }

	return false;
}

console.log(telephoneCheck("1 555-555-5555"));
