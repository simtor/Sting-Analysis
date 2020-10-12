const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin, 
    output : process.stdout
  });


 
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
     const { length: strLen } = answer;
     const { length: numWords } = answer.split(' ');
     const average = (strLen - numWords + 1) / numWords;
     let findDuplicates = arr => arr.filter((item, index) => arr.lastIndexOf(item) != index)
    
     console.log(findDuplicates(words)) // All duplicates
     console.log([...new Set(findDuplicates(words))]) // Unique duplicates

    console.log("You have", words.length,"words in this sentence");
    console.log(words);
    console.log("You have", chars.length,"chacters in this sentence");
    console.log(chars);
    console.log(average);
    rl.close();
  });
};
recursiveAsyncReadLine();




