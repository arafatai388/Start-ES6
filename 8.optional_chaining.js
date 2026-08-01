// =====================================
// Dot Notation & Bracket Notation
// =====================================

const user = {
    name: "Utsho",
    age: 26,
    "my address": "Dhaka",
    company: {
        name: "Programming Hero",
        address: {
            location: "Mirpur DOHS"
        }
    }
};

console.log(user.name);               // Dot notation
console.log(user["my address"]);      // Bracket notation

const key = "company";
console.log(user[key]);

console.log("----------------------");

// =====================================
// Optional Chaining
// =====================================

const user2 = {
    name: "Habib"
};

console.log(user.company.address.location);     // Mirpur DOHS
console.log(user2?.company?.address?.location); // undefined

console.log("----------------------");

// =====================================
// Object Loop
// =====================================

for (const key in user) {
    console.log(key, ":", user[key]);
}

console.log("----------------------");

// =====================================
// Object.entries()
// =====================================

const entries = Object.entries(user);

for (const [key, value] of entries) {
    console.log(key, ":", value);
}