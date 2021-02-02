const friendAges = [12,34,13,56,87,90];
const friendAges2 = [16,34,65,76,89];
const friendAges3 = [20,30,65,76,67];
const totalFriendage = friendAges.concat(friendAges2).concat(friendAges3);
const totalFriendage2 = [...friendAges,...friendAges2,...friendAges3];
// console.log(totalFriendage);
// console.log(totalFriendage2);

const business = 650;
const minister = 250;
const sochib = 300;
const balance = [500,699,399];
const bigger = Math.max(...balance);
console.log(bigger); 
const maximum = Math.max(business,minister,sochib);
console.log(maximum);