/**

ISAN
Description:

isNaN doesn't work very well. We want us to tell us whether the value or object we're dealing with is a number or not. Instead, it tells us if the value is equal to the NaN value it has on-record.

So let's make a proper function, called isAN, for is A Number. If you pass it a value, it will return true if a value is a valid primitive number or Number object, and false if not.
**/

function isAN(value) {
  if(typeof value == "object"){
    if(Array.isArray(value)){
      return false;
    }else{
      var savedValue = parseInt(value);
      if(isNaN(savedValue)){
      return false;
      }
      if(typeof savedValue == "number"){
      return true;
      }
    }
  }
  if(typeof value !== "number"){
    return false;
  }
  return !isNaN(value);
}