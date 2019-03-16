// Converts number to words
'use strict';

let belowTwenty = [
    'zero', 'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

let aboveTwenty = ['twenty', 'thirty', 'forty', 'fifty'];


function toWords(n,isMinute) {
    n = parseInt(n,10);
    let ones = n % 10;
    let tens = n-n%10;
    var result = '';
    var resultOnes, resultTens;

    if ((n == 0) && (isMinute == true)){
      result = 'o\'clock';
    }
    else if ((n < 10) && (isMinute == true)){ // Ones digit to words
      result = 'oh-';
    }
    if ((n < 20) && (n > 0)){
      result += belowTwenty[n];
    }
    else if (n == 20){
      result = 'twenty';
    }
    else if (n > 20){
      if ((n%10) == 0){
        result = aboveTwenty[(tens/10)-2];
      }
      else{
        resultTens = aboveTwenty[(tens/10)-2];
        resultOnes = belowTwenty[ones];
        result = resultTens + '-' + resultOnes;
      }
    }

    return result;
}

//console.log(toWords(0,true));
