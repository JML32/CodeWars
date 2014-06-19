/** In this kata we want to test, if you are able to extend the functionality of standard prototypes. Extend the Array prototype in order to support the methods square(), cube(), average(), sum(), even() and odd(). **/

//Numbers init with an empty array (CodeKata init it for you)
var numbers = [], i, y;
var copyNumbers  = numbers.slice();

/** square() must return a copy of the array, containing all values squared, the original array must not be changed **/
Array.prototype.square = function() {
    for(i = 0, y = this.length ; i <  y; i++){
        copyNumbers[i] = this[i] * this[i];  
    }
    return copyNumbers;
};
/** cube() must return a copy of the array, containing all values cubed, the original array must not be changed **/
Array.prototype.cube = function(){
    for(i = 0, y = this.length ; i <  y; i++){
        copyNumbers[i] = this[i] * this[i] * this[i];
    }
    return copyNumbers;
}
/** average() must return the average of all array values, average() on an empty array must return NaN **/
Array.prototype.average = function(){
   var average = 0;
   for(i = 0, y = this.length ; i <  y; i++){
        average += this[i];
    }
    average = average / y;
    if(average == 0){
        return NaN;
    }
    return average; 
}
/** sum() must return the sum of all array values **/
Array.prototype.sum = function(){
    var sum = 0;
    for(i = 0, y = this.length ; i <  y; i++){
        sum += this[i]; 
    }
    return sum;     
}
/** even() must return an array of all even numbers, the original array must not be changed **/
Array.prototype.even = function(){
    var evenNumbers = [];
    for(i = 0, y = this.length ; i <  y; i++){
        if((this[i] % 2) == 0){
        evenNumbers.push(this[i]);
        }
    }
    return evenNumbers;
}
/** odd() must return an array of all odd numbers, the original array must not be changed **/
Array.prototype.odd = function(){
    var oddNumbers = [];
    for(i = 0, y = this.length ; i <  y; i++){
        if((this[i] % 2) == 1){
        oddNumbers.push(this[i]);
        }
    }
    return oddNumbers;
}