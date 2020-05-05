function telephoneCheck(str) {
	//m for multiline match when testing, g for global all instances
	//^ match pattern start of the string, $ match pattern end of the string
	//? means optional
	//First capture group(country code) - So 1 with or without a space(\s) is valid
	//Second  (Area code) - Can have parentheses or none
	//Use escape character \ cause we normally use parenthese for capture groups, so to actually test
	//the parentheses in a string we need to escape that character using \
	//\d for numbers, {3} max 3, then we escape again for the closing parentheses
	//but the parentheses are optioional so we add an or (|) 3 digits again with no parentheses
	//then we used square brackets [] to much any character in the set
	//so any space (\s) or dash {\-} but its optional so we add a ?
	//then another 3 digits and optional dashes and space
	//then final 4 digits

	var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/g;
	return regex.test(str);
}
