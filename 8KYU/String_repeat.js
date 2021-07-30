/*
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


SOLUTION:*/

let risultato;
let vuoto = [];
function repeatStr(n, s){
    for (let i = 0; i < n; i++) {
        vuoto.push(s);
        risultato = vuoto.join("")

        }
        return risultato;
}
