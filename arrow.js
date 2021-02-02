// function doubleIt(number){
//     return number * 2;
// }
// const doubleIt = function(number){
//     return number * 2;
// }
const doubleIt = number =>number * 2; //ES_6 Style
const add = (x,y) => x + y;
const getIt = () => 100;
const bigFunc = (x,y) => {
    const sum = x+y;
    const difer = x-y;
    const result = sum + difer;
    return result;
}
// const result = doubleIt(10);
const result = add(20,10);
const result2 = getIt();
const result3 = bigFunc(10,5)
console.log(result);
console.log(result2);
console.log(result3);
