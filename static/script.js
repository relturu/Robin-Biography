// when to use var (global & can be used everywhere), 
// let (used in 1 block of code), 
// and const (cannot be reassinged)
// diff b/w " and ' ?
// return none?

var x, y;
x = 5;
y = 7;

var z = x+y;
console.log(z);

var A, B;

A = "Hello";
B = " World!";
var C = A + B;
console.log(C);

function sumNPrint(x1, x2){
  let sum = x1+x2;
  console.log(sum);
//   return sum;
}

sumNPrint(x, y);
sumNPrint(A, B);

if(C.length > x.length){
  console.log(C);
}
else if (C.length < x.length){
  console.log(z);
}
else{
  console.log("good job!") ;
}

const L1 = ["Banana", "Blueberry", "Kiwi", "Blackberry"];
const L2 = ["Peach", "Nectarine", "Banana", "Plum"];

function findTheBanana(L1){
  for (let i=0; i<4; i++){
    if(L1[i]=="Banana"){
      console.log("found the Banana in " + i);
    }
  }
}

findTheBanana(L1);
findTheBanana(L2);

const LArrays = [L1, L2]

// L1.forEach(findTheBanana(LArrays));