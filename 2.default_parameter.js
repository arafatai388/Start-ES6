// =====================================
// Example 1: Greeting Function
// =====================================

function greet(name = "Guest") {
    return "Hello, " + name;
}

console.log(greet("Arafat"));    // Hello, Arafat
console.log(greet());           // Hello, Guest
console.log(greet("Akash"));    // Hello, Akash

console.log("-------------------------");


// =====================================
// Example 2: Coffee Function
// =====================================

function makeCoffee(sugar = 1) {
    return "Coffee prepared with " + sugar + " spoon(s) of sugar.";
}

console.log(makeCoffee(2));     // Coffee prepared with 2 spoon(s) of sugar.
console.log(makeCoffee(5));     // Coffee prepared with 5 spoon(s) of sugar.
console.log(makeCoffee());      // Coffee prepared with 1 spoon(s) of sugar.

console.log("-------------------------");


// =====================================
// Example 3: Price Function
// =====================================

function calculatePrice(price = 100) {
    return price;
}

console.log(calculatePrice(250));   // 250
console.log(calculatePrice(500));   // 500
console.log(calculatePrice());      // 100

console.log("-------------------------");


// =====================================
// Example 4: Introduction Function
// =====================================

function introduce(name = "Guest", country = "Bangladesh") {
    return name + " is from " + country;
}

console.log(introduce());                       // Guest is from Bangladesh
console.log(introduce("Arafat"));               // Arafat is from Bangladesh
console.log(introduce("Arafat", "Canada"));     // Arafat is from Canada
console.log(introduce("Utsho", "Bangladesh"));  // Utsho is from Bangladesh