/** 

Happy Holidays fellow Code Warriors!

Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

Sort the Gift Code

Write a function called sortGiftCode (sort_gift_code in Ruby) that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

Examples:

Javascript/CoffeeScript:

sortGiftCode( 'abcdef' );//=> returns 'abcdef'
sortGiftCode( 'pqksuvy' );//=> returns 'kpqsuvy'
sortGiftCode( 'zyxwvutsrqponmlkjihgfedcba' );//=> returns 'abcdefghijklmnopqrstuvwxyz'

**/

// First try without uniqueness

function sortGiftCode(code) {
    var letters = /^[A-Za-z]+$/ , output = [], i, y;
    if (letters.test(code)) {
        for (i = 0, y = code.length; i < y; i++) {
            output.push(code[i]);
            }
        }else {
            alert("Only letters !")
        }
    
        output.sort();
        code = output.join("");
        return code;
}
    

// Now achieved with uniqueness

function sortGiftCode(code) {
    var i, len=code.length, output=[], obj={};

    for (i=0;i<len;i++) {
        obj[code[i]]=0;
    }
    for (i in obj) {
        output.push(i);
    }
    code = output.sort();
    code = output.join("");
    return code;
}
