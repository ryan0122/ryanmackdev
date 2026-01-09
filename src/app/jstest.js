function reverseString(str) {
	return str.split('').reverse().join('');
}

function findLongestWord(str) {
	var words = str.split(' ');
	var longestWord = '';
	for (var i = 0; i < words.length; i++) {
		if (words[i].length > longestWord.length) {
			longestWord = words[i];
		}
	}
	return longestWord;
}