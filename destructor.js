const person = {name: 'Jon Doe', age:17, fatherName:'Rohim', address: 'Lalbag', tel:'0178903849'};
// const address = person.address;
// const name = person.name;

const {address,name} = person;

console.log(address,name);
console.log(address,name);
console.log(address,name);

const friends = ['kotim','cotim','nojim','sojim','rohim'];
const [first] = friends;
console.log(first);