// =====================================
// Array Destructuring
// =====================================

const numbers = [10, 20, 30, 40, 50];

const [first, second, , , fifth] = numbers;

console.log(first);   // 10
console.log(second);  // 20
console.log(fifth);   // 50

console.log("----------------------");

// =====================================
// Object Destructuring
// =====================================

const student = {
    name: "Utsho",
    roll: 29,
    age: 26,
    marks: {
        physics: 95,
        philosophy: 91,
        math: 44
    }
};

const {
    age,
    name: fullName,
    marks: {
        philosophy,
        physics: myPhysics
    }
} = student;

console.log("Age:", age);
console.log("Full Name:", fullName);
console.log("Philosophy:", philosophy);
console.log("Physics:", myPhysics);