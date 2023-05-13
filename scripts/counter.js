class WordCounter {
    constructor(inputText) {
        this.inputText = inputText;
        this.inputText.addEventListener('input', this.count)
    }

    // count method
    count() {
        let wordStat = this.getWordsStat(this.innerText.value.trim());
        this.emitEvent(wordStat)
    }

    // count characters and word
    getWordsStat(str) {
        let matches = str.match(/\S+/g);
        return {
            characters: str.length,
            words: matches.length
        }  
    }

    // custom event to handle exposing word stat
    emitEvent(wordStat) {
        // create count event
        let countEvent = new CustomEvent('count', {
            bubbles: true,
            cancelable: true,
            detail: {
                wordStat
            }
        });
        // dispatch count event
        this.inputText.dispatchEvent(countEvent);
    }
}