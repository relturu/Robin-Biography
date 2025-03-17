// when to use var (global & can be used everywhere), 
// let (used in 1 block of code), 
// and const (cannot be reassinged)
// diff b/w " and ' ?
// return none?

// Task 4: Basic Javascript Statement
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

// Task 5: Basic Function
function sumNPrint(x1, x2){
  let sum = x1+x2;
  console.log(sum);
//   return sum;
}

sumNPrint(x, y);
sumNPrint(A, B);

// Task 6: Conditional Statement
if(C.length > x.length){
  console.log(C);
}
else if (C.length < x.length){
  console.log(z);
}
else{
  console.log("good job!") ;
}

// Task 7: For Loop

const L1 = ["Banana", "Blueberry", "Kiwi", "Blackberry"];
const L2 = ["Peach", "Nectarine", "Banana", "Plum"];

function findTheBanana(L1){
  for (let i=0; i<4; i++){
    if(L1[i]=="Banana"){
      alert("found the Banana in " + i);
    }
  }
}

findTheBanana(L1);
findTheBanana(L2);

// Task 8: forEach loop

function findTheBananaTwo(item, index, arr){
  if(arr[index]=="Banana"){
   alert("found the Banana in " + index);
  }
}
L1.forEach(findTheBananaTwo);

// Task 9: Date Object and Conditional Greeting & Task 10: Manipulating the DOM
function greetingFunc(){
  // creates date object
  // checks curr hour
  const d = new Date();
  const h = d.getHours();
  if (window.location.pathname.includes("index.html")){

  }
  else{
    return;
  }
  if (h<12){
    console.log("Good mornin'");
    document.getElementById("naming").innerHTML ="good mornin',<br> i'm nico robin, <i> archaeologist";
  }
  else if (12<h && h<18){
    console.log("Good afternoon");
    document.getElementById("naming").innerHTML ="good afternoon,<br> i'm nico robin, <i> archaeologist";
  }
  else if (18<h && h<20){
    console.log("Good Evening'");
    document.getElementById("naming").innerHTML ="good evening,<br> i'm nico robin, <i> archaeologist";
  }
  else if (20<h && h<24){
    console.log("Good night.");
    document.getElementById("naming").innerHTML ="good night,<br> i'm nico robin, <i> archaeologist";
  }
}

greetingFunc();

