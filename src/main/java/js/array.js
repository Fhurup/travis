

var boys = ["Peter", "Lars", "Ole"];
var girls = ["Janne", "Hanne", "Sanne"];

var all = boys.concat(girls);
all.push("Lone", "Gitte");
all.unshift("Hans","Kurt");

console.log(all);

all.shift(0);

console.log(all);

all.pop();

console.log(all);

all.splice(3, 2);

console.log(all);

all.reverse();

console.log(all);

all.sort();

console.log(all);

allU = all.map(n=> n.toUpperCase());

console.log(allU);

allL = all.filter(n=> n.toString().charAt(0) === "L");

console.log(allL);