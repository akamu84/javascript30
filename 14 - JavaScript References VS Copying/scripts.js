// start with strings, numbers and booleans
let age = 100;
const age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'Adam';
const name2 = name;
console.log(name, name2);
name = 'Lemelin';
console.log(name, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(players, team);

// You might think we can just do something like this:
team[3] = 'Lux';

// however what happens when we update that array?
console.log(players, team);

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice();
team2[3] = 'Flux';
console.log(players, team2);

// or create a new array and concat the old one in
const team3 = [].concat(players);
team3[3] = 'Flux';
console.log(players, team3);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'Flux';
console.log(players, team4);

// or use Array.from
const team5 = Array.from(players);
team5[3] = 'Flux';
console.log(players, team5);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80,
};

// and think we make a copy:
const captain = person;
captain.age = 99;
console.log(person, captain);

// how do we take a copy instead?
// eslint-disable-next-line prefer-object-spread
const captain2 = Object.assign({}, person, { age: 100 });
console.log(person, captain2);

// We will hopefully soon see the object ...spread
const captain3 = { ...person, age: 100 };
console.log(person, captain3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const adam = {
  name: 'Adam Bos',
  age: 80,
  social: {
    twitter: '@akamu84',
    facebook: 'Adam Lemelin',
  },
};
console.log(adam);
const dev = { ...adam };
dev.social.twitter = '@Coolman';
console.log(dev);
