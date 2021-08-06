/* Invert a string of name, surname */


function nameShuffler(str){
    let vuoto = str.split(" ");
    let vuoto2 = [];
    let vuoto3;
    for (let i = vuoto.length - 1; i >= 0; i--) {
       vuoto2.push(vuoto[i]);     
       vuoto3 = vuoto2.join(" ");
     }
 return vuoto3;
 }
