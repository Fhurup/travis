var names = ["John","Svend","Ib","Lisbeth","Maria","Camilla"];

var shortNames = names.filter(n => n.length<3)

console.log(shortNames);

namesU = names.map(n=> n.toUpperCase());

console.log(namesU);

var html = "<ul>" + names.map(n=> "<li>" + n + "</li>").join("") + "</ul>"

console.log(html);


var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

var newCars = cars.filter(n=> n.year > 1999);

console.log(newCars);

var Volvo = cars.filter(n=> n.make === "Volvo");

console.log(Volvo);

var cheapCar = cars.filter(n=> n.price < 5000);

console.log(cheapCar);

var sql = cars.map(n=> "INSERT INTO cars (id,year,make,model,price) VALUES (" + n.id + ", " + n.year + ", " + n.make + ", " + n.model + ", " + n.price + ");").join(" ");

var sql2 = "INSERT INTO cars (id,year,make,model,price) VALUES " + cars.map(n=> "( "+ n.id + ", " + n.year + ", " + n.make + ", " + n.model + ", " + n.price + " );").join(" ");


console.log(sql2);

