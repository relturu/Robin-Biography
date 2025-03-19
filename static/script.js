// when to use var (global & can be used everywhere), 
// let (used in 1 block of code), 
// and const (cannot be reassinged)
// diff b/w " and ' ?
// return none?

// can either download jquery - only if extensive editing of lib
// or link to the CDN (content delivery network) --> recommended

// $(selector).action() , basic syntax for jQuery
// $(p).hide(); find all paragraphs and hide
// $(#mypara).hide(); find elem with id my para and hide
// $("p.test").hide(); all pagraphs with class = "test"

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
      // alert("found the Banana in " + i);
    }
  }
}

findTheBanana(L1);
findTheBanana(L2);

// Task 8: forEach loop

function findTheBananaTwo(item, index, arr){
  if(arr[index]=="Banana"){
  //  alert("found the Banana in " + index);
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

// CONTINUED FROM LAB 4

function addYear(){
  const d = new Date();
  const y = d.getFullYear();
  document.getElementById("footer_copyright-year").innerHTML +=y;
}
/*
Create the showList() function in script.js to:
Show the <ul> list (set its display to block)
Hide the button by setting its display to none
Style the button and the list with CSS so the list is hidden by default, and only visible after the button is clicked.
*/

function showList(){
  const myList = document.getElementById("fun_id-list");
  myList.style.display = "block";
  const myButton = document.getElementById("fun_button-styling");
  myButton.style.display = "none";
}

/*
In index.html, below your bio, add a section that will show or hide content when clicked
Use jQuery to toggle between showing a short version of your bio and a longer version:
Show the short bio initially
When "Read More" is clicked, show the full bio and hide the "Read More" button
When "Read Less" is clicked, show the "Read More" button again and hide the extended bio
Include the jQuery library by adding the script reference to the <head> section
Ensure the bio text and buttons are properly styled using CSS

*/

$(document).ready(function(){
  $("#index_bio-long").hide();
});

function showBio(){
  // const myList = document.getElementById("index_bio-long");
  // myList.style.display = "block";
  // const myButton = document.getElementById("index_button-styling");
  // myButton.style.display = "none";
  $(document).ready(function(){
    $("#index_bio-short").hide();
  });
  const myButton = document.getElementById("index_button-styling");
  myButton.style.display = "none";
  $(document).ready(function(){
    $("#index_bio-long").show();
  });
}





function validation(){
  var userName = document.getElementById("hh");
  var msg = document.getElementById("contact_validation-msg");
  // add all other vars w/ the form content checking for blank response
  if (!userName.checkValidity() || !userEmail.checkValidity()){
    msg.innerHTML = "psl fill out forom correctly ty bebs";
  }
}