/**
Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number. Division by zero should return NaN. Arguments will both be integers.
**/

function remainder(a, b){
  // Divide the larger argument by the smaller argument and return the remainder
    // if a or b == 0 return Not a Number
    if (a == 0 || b == 0){
    return NaN;
    }
    // if a < b return the modulo of b%a
    else if(a < b){
      return b%a;
    // else return modulo a%b
    }else{
      return a%b;
  }
}