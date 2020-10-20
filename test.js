const readline = require('readline');
var Sentiment = require('sentiment');
var sentiment = new Sentiment();
const rl = readline.createInterface({
    input : process.stdin, 
    output : process.stdout
  });

//   Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,, comes from a line in section 1.10.32.

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
            
          //   var text = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,, comes from a line in section 1.10.32.";
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
            const average = (charsLen - wordsLen + 1) / wordsLen;
            let findDuplicates = arr => arr.filter((item, index) => arr.lastIndexOf(item) != index)
            console.log(findDuplicates(words)) // All duplicates
            console.log([...new Set(findDuplicates(words))]) // Unique duplicates

            console.log("You have", wordsLen,"words in this sentence");
            // console.log(words);
            console.log("You have", charsLen,"chacters in this sentence");
            // console.log(chars);
            console.log(average);
            var result = sentiment.analyze(answer);
            console.dir(result);
            console.log(totalSyllables);
            console.log(calculateFlesch(totalSentences, totalWords, totalSyllables));
            rl.close();
    });
  };
  recursiveAsyncReadLine();



  

// var Sentiment = require('sentiment');
// var sentiment = new Sentiment();
// var exports = [];
// src="node_modules/flesch-kincaid/flesch-kincaid.js"
// var FleschKincaid = exports;
// var result = sentiment.analyze('Cats are stupid.');
// console.dir(result);

// var syllable = require('syllable')

// syllable('syllable') // 3
// syllable('unicorn') // 3
// syllable('hi') // 1
// syllable('hihi') // 2
// syllable('mmmmmmmmmmmmmmmm') // 1
// syllable('wine') // 1
// syllable('bottle') // 2
// syllable('wine-bottle') // 3
// syllable('Åland') // 2
// function new_count(word) {
//     word = word.toLowerCase();                                     //word.downcase!
//     if(word.length <= 3) { return 1; }                             //return 1 if word.length <= 3
//       word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
//       word = word.replace(/^y/, '');                                 //word.sub!(/^y/, '')
//       let syllable = word.match(/[aeiouy]{1,2}/g).length;  
//       return syllable                 //word.scan(/[aeiouy]{1,2}/).size
//   }
  
//   console.log(new_count('she'));
//   console.log(new_count('supercalifragilisticexpialidocious'))
//   console.log(new_count('softball'))
//   console.log(new_count('unicorn'))


//   console.log("Simone")

// const text = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,, comes from a line in section 1.10.32.";
// let numOfSentences = text.match(/[\w|)][.?!](\s|$)/g).length;
// console.log(numOfSentences); 


// var fleschKincaid = require('flesch-kincaid')

// // For “The Australian platypus is seemingly a hybrid of a mammal and reptilian
// // creature.” (1 sentence, 13 words, 26 syllables).
// console.log(fleschKincaid({sentence: 1, word: 13, syllable: 26}))
// // => 13.08
