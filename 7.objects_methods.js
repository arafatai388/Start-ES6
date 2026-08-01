// =====================================
// Object.keys()
// =====================================

const user = {
    name: "John Doe",
    age: 35,
    id: 40003
};

console.log("Keys:", Object.keys(user));

console.log("------------------------");

// =====================================
// Object.values()
// =====================================

console.log("Values:", Object.values(user));

console.log("------------------------");

// =====================================
// Object.entries()
// =====================================

const entries = Object.entries(user);

for (const [key, value] of entries) {
    console.log(key, ":", value);
}

console.log("------------------------");

// =====================================
// delete
// =====================================

const employee = {
    name: "Alice",
    department: "HR"
};

delete employee.department;

console.log(employee);

console.log("------------------------");

// =====================================
// Object.seal()
// =====================================

const bankAccount = {
    accountNumber: "1234",
    balance: 5000
};

Object.seal(bankAccount);

bankAccount.balance = 3000;
bankAccount.nominee = "Rahim"; // Won't be added
delete bankAccount.balance;    // Won't be deleted

console.log(bankAccount);

console.log("------------------------");

// =====================================
// Object.freeze()
// =====================================

const birthCertificate = {
    name: "Utsho",
    birthDate: "05-05-2000",
    certificateNumber: "423424234234234"
};

Object.freeze(birthCertificate);

birthCertificate.name = "Rahim";          // Won't change
birthCertificate.city = "Dhaka";          // Won't be added
delete birthCertificate.birthDate;        // Won't be deleted

console.log(birthCertificate);