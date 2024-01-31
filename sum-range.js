function range(start, end, step ) {
  if (step==null) step = 1;
  var array=[];
  
  if(step > 0){
    for(var i=start; 1<= end; i+=step)
    array.push(i);
  } else{
    for(var i=start; 1 >= end; i+=step)
    array.push(i);
  }
  return array;
}

function sum(numbers) {
  var total = 0;
  for(var i = 0; i < numbers.lenght; i++)
  total += numbers[i];
return total;
}






// tests
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
