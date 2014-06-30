/* 
Description:

Your task, is to create NxN multiplication table, of size provided in parameter.

*/
multiplicationTable = function (size) {
  var array = [];
  //for loop over size of rows
    for(var i = 1; i <= size; i++){
    // make new innerArray every row
    var innerArray = [];
    //for loop over size of columns
    for(var y = 1; y <= size; y++){
      var result = i*y;
      //push every result to innerArray
      innerArray.push(result);
    }
    //push innerArray to globalArray when column for loop has quit
    array.push(innerArray);  
  }
  return array;
};

multiplicationTable(5);
