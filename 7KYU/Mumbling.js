/*This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.*/

function accum(s) {
    let arr = s.toLowerCase().replace(/[^0-9a-z]/gi, '');  
    let arr2 = arr.split("");
    let empty = [];
    let empty2 = [];    
    for (let i = 0; i < arr2.length; i++) {      
       empty.push(arr2[i].charAt(0).repeat(i+1));
       empty2.push(empty[i].charAt(0).toUpperCase()+ empty[i].substring(1));
       
    }    
    return empty2.join("-");
}
