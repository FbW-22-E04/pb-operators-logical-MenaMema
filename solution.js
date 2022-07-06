const isDogBetter = true;
const isCatBetter = false;
console.log(isDogBetter && isCatBetter);
console.log(isDogBetter || isCatBetter);
console.log(!(isDogBetter && isCatBetter));

console.log("---------------");

const atoms = 10;
const sandGrains = 5;
const starsInSky = 20;

console.log(atoms > starsInSky && atoms > sandGrains);
console.log(atoms != sandGrains);
console.log(starsInSky < sandGrains || starsInSky > atoms);
// console.log(atoms = starsInSky || atoms != sandGrains);
console.log(atoms >= 10 && sandGrains <= 10);
console.log(atoms * starsInSky < 100 || atoms * sandGrains > 100);
