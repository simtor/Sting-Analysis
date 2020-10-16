// var Sentiment = require('sentiment');
// var sentiment = new Sentiment();
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