alert("JS Connected Successfully!");

 function toggleMenu() {
            const menu = document.getElementById("mobileMenu");
            if (menu.style.display === "flex") {
                menu.style.display = "none";
            } else {
                menu.style.display = "flex";
            }
        }
{
let name;
name = "Husnain Muavia";
console.log("My name is" + " " + name);
}

{
    let firstName = "Husnain";
    let lastName = "Muavia";
    let fullName = firstName + " " + lastName;
    console.log("My full name is " + fullName);
}

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