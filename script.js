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