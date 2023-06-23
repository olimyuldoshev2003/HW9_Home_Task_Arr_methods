//Task 1

// function concat(...arr) {
//     return arr.join(",").split(",").map((item) => +item);
// }

// console.log(concat([1, 2, 3], [4, 5], [6, 7]))

//Task 2

// function secondLargest(arr) {
//     return arr.toSorted((a, b) => b - a)[1];
// }

// console.log(secondLargest([10, 40, 30, 20, 50]));
// console.log(secondLargest([25, 143, 89, 13, 105]));
// console.log(secondLargest([54, 23, 11, 17, 10]));

//Task 3

// function compact(arr) {
//     return arr.filter((item)=>item != false && item != undefined)
// }

// console.log(compact([0, 1, false, 2, "", 3]));
// console.log(compact([1, 0, false, null, undefined, "banana"]));
// console.log(compact([]));

//Task 4

// function arrayOfMultiples(num, multiArr) {
//   let newArr = [];
//   for (let i = 1; i <= multiArr; i++) {
//     newArr.push(num * i);
//   }
//   return newArr;
// }

// console.log(arrayOfMultiples(7, 5));
// console.log(arrayOfMultiples(12, 10));
// console.log(arrayOfMultiples(17, 6));

//Task 5

// function marathonDistance(arr) {
//   let initialValue = 0;
//   return arr.reduce((acc, item) => {
//     return acc + Math.abs(item);
//   }, initialValue) >=25;
// }

// console.log(marathonDistance([1, 2, 3, 4]));
// console.log(marathonDistance([1, 9, 5, 8, 2]));
// console.log(marathonDistance([-6, 15, 4]));

//Task 6

// function mirror(arr) {
//     return arr.concat(arr.toReversed().slice(1))
    
// }

// console.log(mirror([0, 2, 4, 6]));
// console.log(mirror([1, 2, 3, 4, 5]));
// console.log(mirror([3, 5, 6, 7, 8]));

//Task 7

// function indexMultiplier(arr) {
//     let newArr = arr.map((item, index) =>item*index)
//     return newArr.reduce((acc, item) => acc+item, 0);
// }

// console.log(indexMultiplier([1, 2, 3, 4, 5]));
// console.log(indexMultiplier([-3, 0, 8, -6]));

//Task 8

// function ascDesNone(arr, sortToIncOrDec) {
//     if (sortToIncOrDec === "Asc") {
//         return arr.sort((a, b) => a - b);
//     } else if(sortToIncOrDec === "Des"){
//         return arr.sort((a, b) => b - a);
//     } else if(sortToIncOrDec === "None")
//     {
//         return arr;
//     }
// }

// console.log(ascDesNone([4, 3, 2, 1], "Asc"));
// console.log(ascDesNone([7, 8, 11, 66], "Des"));
// console.log(ascDesNone([1, 2, 3, 4], "None"));

//Task 9

// function findNaN(arr) {
//     return arr.join("").indexOf(NaN);
// }
// console.log(findNaN([1, 2, NaN]));
// console.log(findNaN([NaN, 1, 2, 3, 4]));
// console.log(findNaN([0, 1, 2, 3, 4]));

//Task 10

// function reverseArr(num) {
//     return num.toString().split("").map((item) => +item).toSorted((a, b) => b - a);
// }

// console.log(reverseArr(1485979));
// console.log(reverseArr(623478));
// console.log(reverseArr(12345));

//I've finished

