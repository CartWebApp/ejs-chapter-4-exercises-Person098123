function arrayToList(arr) {
  let listOutput = null;
  for(i= arr.length -1; i>= 0; i--){
    listOutput= {value: arr[i], rest: listOutput}; 
  }
  return listOutput;
}

function listToArray(list) {
  let arrayOutput = []
  for(let node = list; node; node = node.rest){
  arrayOutput.push(node.value);
  }
  return arrayOutput;
}

function prepend(value, list){
  return{value, rest: list};
}

function nth(list, n){
if(!list) return undefined;
else if (n===0) return list.value;
else return nth(list.rest, n-1);
}
// tests
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
