const array = [10, 20, 30, 40, 50];
const x = 30;

const res = array.indexOf(x);
console.log(res);

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}
console.log(linearSearch(array, 20));
