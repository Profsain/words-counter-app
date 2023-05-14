const inputText = document.querySelector('#text');
const statElem = document.querySelector('#stat');

// create instance of WordCounter
new WordCounter(inputText);

// render word stat
const renderWordStat = (event) => {
    statElem.innerHTML = `You've written <span class="highlight">${event.detail.wordStat.words}</span> words and <span class="highlight">${event.detail.wordStat.characters}</span> characters.`
}

// listen for count event
inputText.addEventListener('count', renderWordStat);