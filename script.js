
// Deel A
const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }
];

const findSpiderMan = superheroes.find((hero) => hero.name === "Spiderman");
console.log(findSpiderMan);
/* 
const findSpiderMan = (hero)=>{
    return hero.name === "Spiderman";
};
console.log(superheroes.find(findSpiderMan));
*/

// Deel B
const doubleArrayValues = (array) => {
    let newArray = [];
    array.forEach(function (i) { newArray.push(i + i); });
    return newArray;
}
console.log(doubleArrayValues([1, 2, 3]));
// result should be [2, 4, 6]

// Deel C
const numbers = [1, 4, 3, 6, 9, 7, 11];
//const numbers = [1, 2, 1, 2, 1, 2];
const containsNumberBiggerThan10 = numbers.some((number) => number > 10);
console.log(containsNumberBiggerThan10);
// result should be true
const numbers2 = [1, 2, 1, 2, 1, 2];
const containsNumberBiggerThan10Sec = numbers2.some((number2) => number2 > 10);
console.log(containsNumberBiggerThan10Sec);
// result should be false

//Deel D
const contries = ['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'];
const isItalyInTheGreat7 = contries.some((item) => {
    return item === "Italy"
})
console.log(isItalyInTheGreat7)
// result should be true

// Deel E
//using map method
const timesTen = [1, 4, 3, 6, 9, 7, 11]
const tenfold = timesTen.map((x) => x * 10);
console.log(tenfold);
// result should be [10, 40, 30, 60, 90, 70, 110]

//using forEach method
const tenArrayValues = (array7) => {
    let newArray1 = [];
    array7.forEach(function (x) { newArray1.push(x * 10); });
    return newArray1;
}
console.log(tenArrayValues([1, 4, 3, 6, 9, 7, 11]));

// Deel F
const beLow = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];
const isBelow100 = beLow.every((y) => y < 100);
console.log(isBelow100);
// result should be: false

// Deel G
const sum = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const bigSum = sum.reduce((currentValue, z) => {
    return z + currentValue
});
console.log(bigSum)
  // result should be 1118