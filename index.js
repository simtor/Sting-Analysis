const readline = require('readline');
var Sentiment = require('sentiment');
var sentiment = new Sentiment();
const rl = readline.createInterface({
    input : process.stdin, 
    output : process.stdout
  });


 
let recursiveAsyncReadLine = function () {
  rl.question('PLease enter your text here: ', function (answer) {
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
     let charsLen = chars.length;
    //  console.log(charsLen);
     let wordsLen = words.length;
    //  console.log(wordsLen);
     const average = (charsLen - wordsLen + 1) / wordsLen;
     let findDuplicates = arr => arr.filter((item, index) => arr.lastIndexOf(item) != index)
     answer = answer.toLowerCase();                                    
    if(answer.length <= 3) { return 1; }                             
      answer = answer.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   
      answer = answer.replace(/^y/, '');                                 
      let syllable = answer.match(/[aeiouy]{1,2}/g).length;
    // const text = answer;
    // console.log(text);
    // let numOfSentences = text.match(/[\w|)][.?!](\s|$)/g).length;
    // console.log(numOfSentences); 
     console.log(syllable);
     console.log(findDuplicates(words)) // All duplicates
     console.log([...new Set(findDuplicates(words))]) // Unique duplicates

    console.log("You have", wordsLen,"words in this sentence");
    console.log(words);
    console.log("You have", charsLen,"chacters in this sentence");
    console.log(chars);
    console.log(average);
    var result = sentiment.analyze(answer);
    console.dir(result);
    rl.close();
  });
};
recursiveAsyncReadLine();




