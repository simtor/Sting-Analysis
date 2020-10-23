var textarea = $('#flesch-text');
var button = $('#flesch-submit');
var flesch = $('#flesch-value');
var Sentiment = require('sentiment');
var sentiment = new Sentiment();

button.click(function () {
    var answer = textarea.val();
        let chars = answer.split("");
        for (let i = 0; i < chars.length - 1; i++) {
            chars[i] += " ";
        }
        let words = answer.split(" ");
        for (let i = 0; i < words.length - 1; i++) {
            words[i] += " ";
        }
        if(!answer.includes(' ')){
            return answer.length;
        };
    function calculateFlesch(totalSentences, totalWords, totalSyllables, ) {
        return (0.39 * (totalWords/totalSentences) + 11.8 * (totalSyllables/totalWords)-15.59)
      }
      function getSyllables(word) {
        word = word.toLowerCase();
        if(word.length <= 3) { return 1; }
        word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
        word = word.replace(/^y/, '');
        let syl = word.match(/[aeiouy]{1,2}/g);
        return (syl && syl.length) || 0;
      }
      
      let totalSentences = 0, totalWords = 0, totalSyllables = 0;
      let text = answer;  
      let sentences = text.split(/[\\.!\?]/);
        totalSentences = sentences.length;
        sentences.forEach(function (sentence) {
          var word = "";
          for (let i = 0; i < sentence.length; i++) {
            word += sentence[i];
            if(sentence[i] == " ") {
              totalWords++;
              totalSyllables += getSyllables(word);
              word = "";
            }
          }
          if(word.length > 0) {
            totalWords++;
            totalSyllables += getSyllables(word);
            word = ""
          }
        });
    let charsLen = chars.length;
    let wordsLen = words.length;
    console.log("Number of words: ", wordsLen);
    console.log("Number of characters: ", charsLen);
    const average = (charsLen - wordsLen + 1) / wordsLen;
    console.log("Avarage word length: ",Math.round(average));
    let findDuplicates = arr => arr.filter((item, index) => arr.lastIndexOf(item) != index)
    let duplicateTest = ([...new Set(findDuplicates(words))]) // Unique duplicates
    console.log("Most common word in the text: ",duplicateTest[0]);
    console.log("Reading level of the text: ",Math.round(calculateFlesch(totalSentences, totalWords, totalSyllables)));
    let result = sentiment.analyze(answer);
    console.log("Positive words from the text: ",);
    result.positive.forEach(element => console.log(element));
    console.log("Negative words from the text: ",);
    result.negative.forEach(element => console.log(element));
    rl.close();

    console.log('Flesch: ', console.log("Number of words: ", wordsLen));
    flesch.html(_.console.log("Number of words: ", wordsLen));
  });