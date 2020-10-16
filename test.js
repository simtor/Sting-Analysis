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