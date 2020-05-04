function telephoneCheck(str) {
	//10 digits
	//11 digits (must start with a 1)
	//No symbols except "-" and "()" and spaces, brackets only groups first 3

	let startsWithOne = /^1/g;
	let elevenDigits = /^[1-9]{1,11}$/g;
	let tenDigits = /^[1-9]{1,10}$/g;
	let correctSymbols = /\s|\-/g;
	let correctBrackets = /\(\w\w\w\)/g;
	let spaces = /\s/g;
	let numbers = /\w/g;

	console.log(str.match(numbers).length);

	let testS = str.replace(correctSymbols, "");
	let testSS = testS.replace(correctBrackets, "");

	console.log(correctBrackets.test(str));
	//

	if (str.match(numbers).length !== 10 && str.match(numbers).length !== 11) {
		return false;
	} else if (
		str.match(numbers).length === 11 &&
		startsWithOne.test(str) === false
	) {
		return false;
	}
	// If starts with 1
	// if (correctBrackets.test(str) === true && startsWithOne.test(str) === true && str.match(numbers).length <= 11){
	//   return true
	// } else if (startsWithOne.test(str) === true && str.match(numbers).length === 11 && correctBrackets.test(str) === true ){
	//   return true
	// }else if (correctBrackets.test(str) === true && str.match(numbers).length === 10 ) {
	//   return true
	//   } else if (startsWithOne.test(str) === true && str.match(numbers).length === 11) {
	//     return true
	//   } else if ()

	// } else if (str.match(numbers).length === 10) {
	//   return true
	// }
	// } else if (startsWithOne.test(testS) === true && elevenDigits.test(testS) === true){
	// return true
	//  } else if (testS.length === 10) {
	//    return true
	//  } else if (testSS.length === 7 || correctBrackets.test(testS) === true) {
	// return true
	//   }

	return true;
}

console.log(telephoneCheck("1 555-555-5555"));
