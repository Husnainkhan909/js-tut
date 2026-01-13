//alert to check js connection
//alert("JS Connected Successfully!");

//mobile menu toggle
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

//variable declaration
{
    let name;
    name = "Husnain Muavia";
    console.log("My name is" + " " + name);
}

//string concatenation
{
    let firstName = "Husnain";
    let lastName = "Muavia";
    let fullName = firstName + " " + lastName;
    console.log("My full name is " + fullName);
}

//data types in js
const student = {
    fullName: "Husnain Muavia",
    age: 20,
    rollno: 26844,
    cgpa: 3.4,
    ispass: true,
}

console.log(student);
console.log(student.age);

console.log(typeof student);
console.log(typeof student.age);
console.log(typeof student.cgpa);
console.log(typeof student.fullName);
console.log(typeof student.ispass);
console.log(typeof student.rollno);

//arithmatic operators
{
    let a = 10;
    let b = 20;
    let sum = a + b;
    console.log("the sum of a and b is " + sum);
    let diff = b - a;
    console.log("the difference of a and b is " + diff);
    let mul = a * b;
    console.log("the multiplication of a and b is " + mul);
    let div = b / a;
    console.log("the division of a and b is " + div);

}

//arithmatic operators
{
    let x = 15;
    let y = 10;
    let modulus = x ** y;
    console.log("the modulus of x and y is " + modulus);

    let increment = x++;
    console.log("the increment of x and y is " + increment);

    let decrement = x--;
    console.log("the decrement of x and y is " + decrement);
};
//assignment operators
{
    let a = 5;
    let b = 10;

    a += 7;
    console.log("the value of a after += is " + a);

    b -= 3;
    console.log("the value of b after -= id " + b);

    a *= b;
    console.log("the value of a after *= is " + a);

    b /= 2;
    console.log("the value of b after /= is " + b);

    b %= 2;
    console.log("the value of b after %= is " + b);
}

//comparison operators
{
    let p = 20;
    let q = 15;
    console.log("the p==q is ", p == q);

    console.log("the p!=q is ", p != q);

    console.log("the p===q is ", p === q);

    console.log("the p!==q is ", p !== q);

    console.log("the p < q is ", p < q);

    console.log("the p > q is ", p > q);
}

//logical operators
{
    let m = 25;
    let n = 30;

    let cond1 = m < n;
    let cond2 = m===25;

    console.log("the cond1 && cond2 is ", cond1 && cond2);

    console.log("the cond1 || cond2 is ", cond1 || cond2);


}

//conditional statements

{
    let age = 12;

    if ( age >= 18){
        console.log("you are eligible to vote");
    }
    if( age < 18){
        console.log("you are not eligible to vote");
    }
 }

 //if statements
 {
    let mode = "light";
    let color;

    if (mode === "dark"){
        console.log("black");
    }
    if (mode === "light"){
        console.log("white");
    }
 }

 //if else
 {
    let age = 20;

    if ( age >= 18){
        console.log("yor r eligible to vote");
    }
    else{
        console.log("you are not eligible to vote");
    }
 }
 
 //if else
 {
    let num = 10;

    if ( num % 2 === 0){
        console.log("the num is even");
    }
    else{
        console.log("the num is odd");
    }
 }  
 //if else if else
 {
    let mode = "pink";
    let color;

    if(mode === "dark"){
        color = "black";
    }
    else if (mode === "blue"){
        color = "blue";
    }
    else{
        color = "white";
    }
    console.log("the color is " + color);
 }

 //ternary operator
 {
    let age = 19;

    let eligiblity = (age >= 18) ? "eligible" : "not eligible";
    console.log("The person is " + eligiblity + " to vote");
 } 

 //switch case 
 {
    let fruit = "apple";

    switch(fruit) {
        case "banana":
            console.log("banana is yellow");
            break;
             case "peach":
            console.log("peach is pink");
            break;
             case "apple":
            console.log("apple is red");
            break;
             case "mango":
            console.log("mango is yellow");
            break;
            default:
                console.log("unknown fruit");

    }
 }  

 //prompts
  /*{
    let num = prompt("Enter a number:");

    if (num % 5 === 0){
        console.log(num + " is multiple of 5");
    }
    else{
        console.log(num + " is not multiple of 5");
    }
 }*/

 //2nd
 /*{
    let marks = prompt("enter your marks:");

    if (marks >= 85){
        console.log("A grade")
    }

    else if (marks <= 85 && marks >= 75){
        console.log("B grade")
    }
    
    else if (marks <= 75 && marks >= 65){
        console.log("C grade")
    }

    else if (marks <= 65 && marks >= 50){
        console.log("D grade")
    }

    else {
        console.log("F grade")
    }
 } */


 //loops

 //for loop
 {
    for( let i =1; i <= 5; i++){
        console.log("husnain");
    }
 }

 {
    let sum =0;
    for( let i = 1; i <= 5; i++){
        sum= sum + i;
    }
    console.log("the sum is " + sum);
 } 

 {
    let car = ["toyota", "honda", "ford", "BMW", "Audi"];

    let text = "";
    for ( let i = 0; i < car.length; i++){
        text += car[i] + "\n";
 }
 console.log(text);
}

{
    let sum = 0;
    let n= 100;

    for( let i = 1; i <= n; i++){
        sum += i;
    }
    console.log("the sum of first " + n + " number is " + sum);
    console.log("loop is ended");
} 

//while loop
{
    let i = 1;
    while(i <= 5){
        console.log("i=" + i);
        i++;
    }
}  

//do while loop

{
    let i= 20;
    do {
        console.log("Husnain");
        i++;
    } while (i <= 5);
} 

// for ..of loop

{
    let name = "Husnain";

    for( let ch of name){
        console.log(ch);
    }
}
 
{
    let fruit =["apple", "banana", "mango", "peach"];
    
    let size = 0;

    for (let f of fruit){
        console.log(f);
        size++;
    }
    console.log("the size of array is " + size);
} 
//for in loop 
{
    let student ={
        fullName: "Husnain",
        age : 20,
        rollno: 26844,
        cgpa: 3.4,
        ispass: true,
    }
    for ( let i in student){
        console.log(i + ":" + student[i] );
    }
}

{
    for(let num = 0; num <=100; num++){
        if ( num % 2 === 0){
            console.log("even num = " + num);
        }
    }
} 

{
    let i = 0;
    do {
        if(i % 2 !== 0){
            console.log("odd num = " + i);
        }
        i++;
    }
    while(i<=100);
}