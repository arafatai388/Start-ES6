// =====================================
// Spread Operator
// =====================================

let numbers = [10, 20, 30, 40, 50];

console.log(...numbers);

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

let copyNumbers = [...numbers];

console.log(copyNumbers);

let newNumbers = [...numbers, 60, 70];

console.log(newNumbers);

console.log("----------------------");

// =====================================
// Object Spread
// =====================================

let student = {
    name: "Arafat",
    age: 22
};

let student2 = {
    ...student,
    gpa: 5.00
};

console.log(student);
console.log(student2);

console.log("----------------------");

// =====================================
// Rest Operator
// =====================================

function sum(a, b, c, ...restNumbers) {

    console.log("Rest Numbers:", restNumbers);

    let total = 0;

    for (let number of restNumbers) {
        total += number;
    }

    return a + b + c + total;
}

console.log(sum(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));