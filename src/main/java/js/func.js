
// Function Declaration
       //Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}

//Function Expression
var sub = function(n1,n2){
  if(typeof n1 === "number" && typeof n2 === "number"){
  return n1 - n2;
  }else{
      return "fy"
  }
} 

// Callback example
var cb = function(n1,n2, callback){
    if(typeof n1 === "number" && typeof n2 === "number" && typeof callback === "function"){
        return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
    }else{
        throw new Error("Wrong input");
    }
};

var mul = function (n1, n2){
    return n1 / n2;
};

console.log(sub("hej", 2));
console.log( add(1,2) )
console.log( add ) 
console.log( add(1,2,3) ) ;
console.log( add(1) );    
console.log( cb(3,3,add) );
console.log( cb(4,3,sub) );
try{
    console.log(cb(3,3,add()));
}catch(Error){
    console.error(Error.name + " " + Error.message);
}
console.log(cb(3,"hh",add));
console.log(cb(10, 2, mul));
