/**
Let's implement the range function:

range([start], stop, [step])

range(1, 11);
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

range(1, 4, 0); // /!\ note that the step is 0
=> [1, 1, 1]

range(0);
=> []

range(10, 0); // /!\ note that the end is before the start
=> []

range(10);
=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

range(0, 30, 5);
=> [0, 5, 10, 15, 20, 25]
start, if omitted, defaults to 0; step defaults to 1.

Returns a list of integers from start to stop, incremented (or decremented) by step, exclusive.

Note that ranges that stop before they start are considered to be zero-length instead of negative.
**/

function range(start, end, range){
  var array = [];
  if(arguments.length == 0){
    console.log("No parameters");
    return array;
  }
  else if(arguments.length == 1){
    console.log("There is 1 parameters");
    for(var i = 0, y = arguments[0]; i < y; i++){
      array.push(i);
    }
    return array;
  }
  else if(arguments.length == 2){
    console.log("There are 2 parameters");
    var argument1 = arguments[0];
    var argument2 = arguments[1];
    //check if start is larger than end
    if(argument1 > argument2){
      console.log("Argument1 is larger than argument2");
      return array;
    }else{
      for(var i = arguments[0], y = arguments[1]; i < y; i++){
        console.log(i);
        array.push(i);
      }
    }
  }
  else if(arguments.length == 3){
    console.log("There are 3 parameters");
    if(argument1 > argument2){
      console.log("Argument1 is larger than argument2");
      return array;
    }else{
      for(var i = arguments[0], y = arguments[1]; i < y; i+=arguments[2]){
        if(i > y){
          
        }else{
          array.push(i);
        }
        
      }
      return array;
    }
  }
}