function deepEqual(value, reference) {
  if (value === reference) return true;
  
  if (value == null || typeof value != "object" ||
  reference == null || typeof reference != "object") return false;

  let keysValue = Object.keys(value), keysReference = Object.keys(reference);

  if (keysValue.length != keysReference.length) return false;

  for (let key of keysValue) {
    if (!keysReference.includes(key) || !deepEqual(value[key], reference[key])) return false;
  }

  return true;
}






// tests
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
