document.getElementById("countButton").onclick = function () {

    let typedText = document.getElementById("textInput").value;

    // This changes all the letter to lower case.
    typedText = typedText.toLowerCase();

    // This gets rid of all the characters except letters, spaces, and apostrophes.
    // We will learn more about how to use the replace function in an upcoming lesson.
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    words = typedText.split(/\s/);
    letterCounts = {};

        //Letter counter 
        
    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];

        // Do something for each letter.

        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }
    }

    for (let letter in letterCounts) {
        let span = document.createElement("span");
        let textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
        span.appendChild(textContent);
        document.getElementById("lettersDiv").appendChild(span);
    }

        //Word counter 

    wordCounts = {};

    for (let x = 0; x < words.length; x++) {

        //Do something for each word.

        currentWord = words[x];

        if (wordCounts[currentWord] === undefined) {
            wordCounts[currentWord] = 1;
        } else {
            wordCounts[currentWord]++;
        }
    }

    for (let word in wordCounts) {
        let span = document.createElement("span");
        let textContent = document.createTextNode('"' + word + "\": " + wordCounts[word] + ", ");
        span.appendChild(textContent);
        document.getElementById("wordsDiv").appendChild(span);
    }
}