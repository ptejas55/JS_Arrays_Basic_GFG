const arr = [10, 20, 40, 60, 80, 30];
const max = Math.max(...arr);
console.log(max);
//-------------------------------------------------------------------
//best solution
function largest(arr) {
  let max = arr[0];

  // Traverse from second and compare
  // every element with current max
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(largest(arr));
//---------------------------------
const max1 = arr.reduce((a, b) => (a > b ? a : b));
console.log(max1);
