const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin, 
    output : process.stdout
  });



let recursiveAsyncReadLine = function () {
  rl.question('Names of the drivers: ', function (answer) {
    var words = answer.split(" ");
    for (var i = 0; i < words.length - 1; i++) {
        words[i] += " ";
    }
    console.log(words);
    // if (answer == 'exit') 
    //   return rl.close();
    recursiveAsyncReadLine(); 
  });
};
recursiveAsyncReadLine();