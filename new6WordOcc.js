function wordOcc(input) {
    let wordObject = {};

    for (const word of input) {
        if (!wordObject.hasOwnProperty(word)) {
            wordObject[word] = 1;
        } else {
            wordObject[word] += 1;
        }
    }

    let sortedWord = Object.entries(wordObject).sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < sortedWord.length; i++) {
        let [word, count] = sortedWord[i];
        console.log(`${word} -> ${count} times`);
    }
}

wordOcc(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
//wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);