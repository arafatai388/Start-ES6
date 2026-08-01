// =====================================
// Template Strings (ES6)
// =====================================

// Example 1

let name = "Arafat";
let price = 500;
let quantity = 5;

let message = `Hello, ${name}. Your bill is ${price * quantity}.`;

console.log(message);

console.log("---------------------------");

// Example 2

let amount = 2500;

function admissionConfirmationMail(name, amount) {
    return `Hello, ${name || "Student"},
Your payment is successful.
Your paid amount is ${amount}.`;
}

console.log(admissionConfirmationMail("Utsho", 3000));

console.log("---------------------------");

console.log(admissionConfirmationMail(undefined, 5000));