/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.*/


function highAndLow(numbers){
    let vuoto= [];
    let b = numbers.replace(/ /g," ");
    let c = b.split(" ");
    let risultato;
    let risultato1;
    let risultato2;
    let risultato3;
    for (let i = 0; i < c.length; i++) {
        vuoto.push(Number(c[i]));
        console.log(vuoto);
    }
    let ciccio = vuoto.sort(function (a, b) {  return a - b;  });
    risultato = ciccio[0].toString()
    risultato1 = ciccio[ciccio.length-1].toString();    
    risultato2 = risultato1 + risultato;    
    risultato3 = risultato1 + " " + risultato;    
    return risultato3;
    }






