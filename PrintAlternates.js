const array = [10, 20, 30, 40, 50];

//using filter method
const res = array.filter((_, index) => index % 2 === 0);
console.log(res);

//using for loop
const res1 = [];
for (let i = 0; i <= array.length; i = i + 2) {
  res.push(array[i]);
}
console.log(res1);
