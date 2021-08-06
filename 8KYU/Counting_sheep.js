/*Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

FUNDAMENTALSARRAYS*/

function countSheeps(arrayOfSheep) {
    
        arrayOfSheep = arrayOfSheep.filter(function(item){
        if (item != undefined && item != null){  
        return item !== false;
        }
        })
        
        console.log(arrayOfSheep);
        console.log(arrayOfSheep.length)
    
    return arrayOfSheep.length;
    
    }
