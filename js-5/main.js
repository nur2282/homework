// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
  name: "Нурик",
  age: 18,
  height: 181,
  country: "Russia",
};

for (const characteristics in person) {
  console.log(`${characteristics}:`, person[characteristics]);
}

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

function isEmpty(object) {
  for (const key in object) {
    return false;
  }
  return true;
}

console.log(isEmpty(person));

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
  title: "Заголовок",
  description: "Описание",
  isCompleted: true,
};

function cloneAndModify(object, modifications) {
  const task2 = { ...object, ...modifications };
  return task2;
}

const newModifications = {
  title: "Собака",
  name: "Рекс",
};

const newTask = cloneAndModify(task, newModifications);

for (const key in newTask) {
  console.log(`${key}:`, newTask[key]);
}

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

const callAllMethods = object => {
  for (const key in object) {
    if (typeof object[key] === "function") {
      object[key]();
    }
  }
};

callAllMethods(myObject);
