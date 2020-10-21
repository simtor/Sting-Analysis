const readline = require('readline');
var Sentiment = require('sentiment');
var sentiment = new Sentiment();
const rl = readline.createInterface({
    input : process.stdin, 
    output : process.stdout
  });

//  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,, comes from a line in section 1.10.32.
// "Did LA give up too much to get a guy who has been labeled soft, although he puts up 19 and 9, which 11 other guys do? Is that a trick question? They gave up Kwa-me Brown, who cares? I could care less! First of all, understand something. When you're giving up first round picks, if you are a quality team in playoff contention, it really doesn't mean that much, that's number one. Number two and more importantly, Kwame Brown is gone! The City of Angels, Hollywood should be celebrating. Throw a parade already whether you win a championship or not. This man was a bonafide scrub! He can't play! No disrespect whatsoever, but I'm sorry to call, tell everybody the truth, the man cannot play the game of basketball. He has small hands, he can't catch the ball, he has bad feet, he can't really move even though he's mobile, doesn't really know what he's doing, doesn't have a post move that he or he puts to memory that he can do two times in a row. He has no game whatsoever, plays no defense, doesn't have the heart, the passion or anything that comes with it, and you're asking me whether they gave up too much? Please. The Los Angeles Lakers knew exactly what they were doing, they should be celebrating right now, and Kobe Bryant should not be saying a word!"


let recursiveAsyncReadLine = function () {
    rl.question('Names of the drivers: ', function (answer) {
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
        // return (206.835 - (1.015 * (totalWords/totalSentences)) - (84.6 *(totalSyllables/totalWords)));
        return (0.39 * (totalWords/totalSentences) + 11.8 * (totalSyllables/totalWords)-15.59)
      }
      function getSyllables(word) {
        word = word.toLowerCase();
        if(word.length <= 3) { return 1; }
        word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
        word = word.replace(/^y/, '');
        var syl = word.match(/[aeiouy]{1,2}/g);
        return (syl && syl.length) || 0;
      }
      
      var totalSentences = 0, totalWords = 0, totalSyllables = 0;
      var text = answer;  
      var sentences = text.split(/[\\.!\?]/);
        totalSentences = sentences.length;
        sentences.forEach(function (sentence) {
          var word = "";
          for (var i = 0; i < sentence.length; i++) {
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
    //  console.log(charsLen);
    let wordsLen = words.length;
    //  console.log(wordsLen);
    // console.log(words);
    // console.log(chars);
    console.log("Number of words: ", wordsLen);
    console.log("Number of characters: ", charsLen);
    const average = (charsLen - wordsLen + 1) / wordsLen;
    console.log("Avarage word length: ",Math.round(average));
    let findDuplicates = arr => arr.filter((item, index) => arr.lastIndexOf(item) != index)
    let duplicateTest = ([...new Set(findDuplicates(words))]) // Unique duplicates
    console.log("Most common word in the text: ",duplicateTest[0]);
    console.log("Reading level of the text: ",Math.round(calculateFlesch(totalSentences, totalWords, totalSyllables)));
    // console.log(findDuplicates(words)) // All duplicates
    // console.log([...new Set(findDuplicates(words))]) // Unique duplicates
    var result = sentiment.analyze(answer);
    console.log("Positive words from the text: ",);
    result.positive.forEach(element => console.log(element));
    console.log("Negative words from the text: ",);
    result.negative.forEach(element => console.log(element));
    rl.close();
    });
  };
  recursiveAsyncReadLine();