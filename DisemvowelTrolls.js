
//First try 1hour 
// Had real difficulties to know if I could use splice (only for arrays) or split/SubString for String
/*
function disemvowel(str) { 
    var arrayOfVowels = ["a", "e", "i", "o", "u"];
    for(var i = 0, y = str.length; i < y; i++){
    console.log(str[i]);
    arrayOfVowels.forEach(function(y) { 
        if(str[i] == y){
            console.log("vowel");
            var x = str.indexOf(y);
            var replace = str[x];
            console.log(replace);
            var newstr = str.replace(replace, " ");
            console.log(newstr);
        }
        });
    }


}

disemvowel("heyae");
*/

//Second try
function disemvowel(str){
    var newstr = str.replace(/[aeiou]/ig, "");
    return newstr;
}