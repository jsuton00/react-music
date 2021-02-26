export const trimString = (str) => {
	let stringText = String(str);
	let trimmedString;

	if (stringText.length > 50) {
		trimmedString = stringText.substring(0, 24);
		return `${trimmedString}...`;
	} else {
		trimmedString = stringText;
		return trimmedString;
	}
};
