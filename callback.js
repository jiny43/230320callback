const exampleArray = [5,2,7,3,9,324,66,43];
function minValue(array, callback){
  let min= array[0]; //?5
  for (let i = 1; i< array.lenght; i++){
    if(array[i]<min){
      min = array[1];
      
    }
  }
  return callback(min);
}
const minValueExample = minValue(exampleArray, function(result){
  return result *2;
});

console.log(minValueExample);