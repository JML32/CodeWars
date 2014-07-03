/* Description:

Let's build a calculator that can calculate the average for an arbitrary number of arguments.

The test expects you to provide a Calculator object with an average method:

Calculator.average();

The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.

It expects Calculator.average(3,4,5) to return 4. */


var Calculator = {
 average: function() {
  
  var args = Array.prototype.slice.call(arguments);
  var total = 0;
  var average = 0;
  var argsLength = args.length;
  if(argsLength == 0){
    return 0;
  }else {
     for(var i = 0, y = args.length; i < y; i++){
     args[i] = parseInt(args[i]);
     total += args[i];
     }
    average = total/argsLength;
    return average;
  }
 }
};

Calculator.average(3, 4, 5);