const firstName = "Нурик";
const lastName = "Мажитов";
const isStudent = true;

const age = 18;
const currentYear = 2026;
const birthYear = currentYear - age;

const studentResume = `Меня зовут ${firstName} ${lastName}, мне ${age} лет. Я ученик курса ${isStudent}`;

console.log(studentResume);

let a = "123";
let b = +"456";
let c = Number("789");
let d = Boolean(0);
let e = Boolean(" ");
let result = a + b + c + d + e;

// результат 123456789falsetrue
