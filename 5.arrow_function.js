// =====================================
// Arrow Functions (ES6)
// =====================================

// Example 1: Single Parameter (Implicit Return)

const sayGreet = (name) => `Hello ${name}, Good morning.`;

console.log(sayGreet("Utsho"));

console.log("----------------------");

// Example 2: Multiple Parameters

const sumFirstThenMultiplyByThree = (a, b) => {
    const sum = a + b;
    return sum * 3;
};

console.log(sumFirstThenMultiplyByThree(5, 5));

console.log("----------------------");

// Example 3: No Parameter

const sayHi = () => "Hi";

console.log(sayHi());

console.log("----------------------");

// Example 4: Arrow Function vs Regular Function

const student = {
    name: "Utsho",
    age: 26,

    showName: function () {
        return `Name: ${this.name}, Age: ${this.age}`;
    },

    showAge: () => {
        return `Age: ${this.age}`;
    }
};

console.log(student.showName()); // Works
console.log(student.showAge());  // Age: undefined