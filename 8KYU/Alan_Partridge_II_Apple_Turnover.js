/*If the square of the provided X is equals or greater than 1000, return "It's hotter than the sun!!", else return "Help yourself to a honeycomb Yorkie for the glovebox."*/

function apple(x){
    let ciao = Math.floor(x);
    let risposta;
if (Number.isInteger(ciao) === true && x * x >= 1000){
    risposta = "It's hotter than the sun!!";
}
else {
    risposta = "Help yourself to a honeycomb Yorkie for the glovebox.";
}
return risposta;
}

apple(250);
