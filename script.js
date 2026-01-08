alert("JS Connected Successfully!");

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
const student ={
    fullName: "Husnain Muavia",
    age : 20,
    rollno : 26844,
    cgpa : 3.4,
    ispass : true,
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
    console.log("the sum of a and b is " + sum );
    let diff = b - a;
     console.log("the difference of a and b is " + diff );
     let mul = a * b;
     console.log("the multiplication of a and b is " + mul);
     let div = b / a;
      console.log("the division of a and b is " + div);
}
//arithmatic operators
 {
    let x = 15;
    let y =10;
    let modulus = x ** y;
    console.log("the modulus of x and y is " + modulus);

    let increment = x ++;
    console.log("the increment of x and y is " + increment);

    let decrement = x --;
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
    console.log("the p==q is " , p==q );

    console.log("the p!=q is " , p!=q );

    console.log("the p===q is " , p===q);

    console.log("the p!==q is " , p!==q);
 }