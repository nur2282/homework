// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.
function calculateFinalPrice(price, discount, tax) {
  let discountAmount = (price * discount) / 100;
  let priceAfterDiscount = price - discountAmount;
  let taxAmount = priceAfterDiscount * tax;
  return priceAfterDiscount + taxAmount;
}

console.log(calculateFinalPrice(100, 10, 0.2));
console.log(calculateFinalPrice(100, 10, 0));

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".
const userName = prompt("Введите имя пользователя");
const userPassword = prompt("Введите пароль");
function checkAccess(login, password) {
  let result = login === "admin" && password === "123456" ? "Доступ разрешен" : "Доступ запрещен";

  return result;
}
alert(checkAccess(userName, userPassword));

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

const getTime = +prompt("Введите время от 0 до 23 в числах");

const getTimeOfDay = time => {
  if (time < 0 || time > 23) {
    return "Неккоректное время";
  } else if (time <= 5) {
    return "Ночь";
  } else if (time <= 11) {
    return "Утро";
  } else if (time <= 17) {
    return "День";
  } else {
    return "Вечер";
  }
};

alert(getTimeOfDay(getTime));

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

const firstNumber = +prompt("Введите первое число", 0);
const secondNumber = +prompt("Введите второе число", 0);

function findFirstEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      return `Первое четное число - ${i}`;
    }
  }
  return "Четных чисел нету((";
}

// Пример работы:

alert(findFirstEven(firstNumber, secondNumber));
