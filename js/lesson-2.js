//! Завдання 1:

//* Створіть масив styles з елементами 'jazz' і 'blues'
//* Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
//* Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

//* Напишіть функцію logItems(array), яка приймає масив як аргумент
//* і виводить у консоль кожен його елемент у форматі:
//* "<номер елемента> - <значення елемента>".
//* Використайте цикл for для перебору елементів масиву.
//* Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ["jazz", "blues"];
// styles.push("rock - n - roll");

// const index = styles.indexOf("blus");
// if (index === -1) {
//     console.log("element not found");
// } else {
//     styles[index] = 'classic';
// }

// console.log(styles);



// function logItems(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`${i} - ${array[i]}`);
        
//     }
// }

// logItems(styles)

//! Завдання 2:

//* Напишіть функцію checkLogin(array), яка:
//* Приймає масив логінів як аргумент.
//* Запитує ім'я користувача через prompt.
//* Перевіряє, чи є введене ім'я у переданому масиві.
//* Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
//* Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//     const loginName = prompt("Введіть ім'я");
//     for (const arr of array) {
//         if (arr === loginName) {
//              return alert(`Welcome, ${loginName}!`);
//         }
//     }
//     alert("User not found");
// }

// console.log(checkLogin(logins));

//! Завдання 3:

//* Напишіть функцію caclculateAverage(),
//* яка приймає довільну кількість
//* аргументів і повертає їхнє середнє значення.
//* Додайте перевірку, що аргументи - це числа.


// function caclculateAverage(...args) {
    
   

//     let sum = 0;
//     let count = 0;


//     for (const arg of args) {
//         if (typeof arg === "number") {
//             count++
//             sum += arg;
//         }
           
//     }

//     if (count === 0) {
//         return 0;
//     }

//     return sum / count;
// }

// console.log(caclculateAverage(10, 2));


// !Завдання 4:

//* Напишіть функцію, яка сумуватиме сусідні числа
//* і пушитиме їх в новий масив.

//* const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

//* уточнення: складати необхідно перше число з другим, потім друге - з третім,
//* третє - з четвертим і так до кінця.
//* В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumArray(array) {
//     let i = 0;
//     const newArray = [];
    
//     for (const arr of array) {
//         if (i < array.length - 1) {
//             newArray.push(arr + array[i + 1]);
//         };
//         i++
        
//     }
//     return newArray
    
//  };

// console.log(sumArray(someArr));

//! Завдання 5:

//* Напишіть функцію findSmallestNumber(numbers),
//* яка шукає найменше число в масиві.
//* Додайте перевірку, що функція отримує саме масив, і
//* якщо функція отримує масив - поверніть з функції найменше число,
//* в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers) {
//     if (!Array.isArray(numbers)) {
//         return 'Sory, it is not an array!';
//     };

//     let min = numbers[0];

//     for (const num of numbers) {
//         if (min > num) {
//             min = num;
//         }
        
        
//     }
//     return min;
// };

// findSmallestNumber(numbers);



// console.log(findSmallestNumber(numbers));

//! Завдання 6:

//* Напишіть функцію findLongestWord(string), яка
//* приймає довільний рядок, що складається лише зі слів, розділених
//* пробілами (параметр string), і повертатиме найдовше слово у реченні.

//* Скористайтесь цим прикладом виклику функції для перевірки її роботи:
//* console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// function findLongestWord(string) { 
//     const stringArray = string.split(" ");
//     let word = stringArray[0];
//     for (const arr of stringArray) {
//         if (word.length < arr.length) {
//             word = arr;
//          }   
//      }
//     return word;
// };

// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'




//! Завдання 7:

//* Напишіть скрипт, який для об'єкту user, послідовно:
//* 1 - додасть поле mood зі значенням 'happy',
//* 2 - замінить hobby на 'skydiving',
//* 3 - замінить значення premium на false,
//* 4 - виведе зміст об'єкта user у форматі
//* '<ключ>:<значення>' використовуя Object.keys() та for...of

//  const user = {
//      name: "John",
//      age: 20,
//      hobby: "tenis",
//      premium: true,
//    };

// user.mood = "happy";

// // useer["mood"] = "happy"

// // const key = "mood";
// // user["mood"] = "happy"

// user.hobby = 'skydiving';
// user.premium = false;

// const userKeys = Object.keys(user);

// for (const key of userKeys) {
//     console.log(`${key}:${user[key]}`);
    
// }


// const userArrs = Object.entries(user);
// for (const arr of userArrs) {
//     console.log(`${arr[0]}:${arr[1]}`);
    
// }

// // console.log(userArrs);






//! Завдання 8:

//* Є об'єкт, в якому зберігаються зарплати команди
//* Напишіть код для додавання усіх зарплат та
//* збережіть його результат в змінній sum.
//* Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };

// let sum = 0;
// const salariesValues = Object.values(salaries);
// for (const value of salariesValues) {
//     sum += value;
// }

// console.log(sum);





//! Завдання 9:

//* Створіть об'єкт calculator з наступними методами:
//* read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
//* sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
//* mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
//* винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

//* Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
//* методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//     read(a, b) {
//         this.a = a;
//         this.b = b;
//     },

//     exist() {
//         return this.a !== undefined && this.b !== undefined;
//     },

//     sum() {
//         if (!this.exist())
//             return "No such propetie";
        
//         return this.a + this.b;
//     },

//     mult() {
//         if (!this.exist()) 
//             return "No such propetie";
        
//         return this.a * this.b;
//     }

// }

// // calculator.read(8, 4)
// console.log(calculator);

// console.log(calculator.sum());
// console.log(calculator.mult());




//! Завдання 10:

//* Напишіть функцію calcTotalPrice(fruits, fruitName),
//* яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
//* Функція рахує і повертає загальну вартість фрукта
//* з таким ім'ям, ціною та кількістю з об'єкта.

//* Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
//* назвою фрукта, це також треба урахувати.

//  const fruits = [
//      { name: "Яблуко", price: 45, quantity: 7 },
//      { name: "Апельсин", price: 60, quantity: 4 },
//      { name: "Банан", price: 125, quantity: 8 },
//      { name: "Груша", price: 350, quantity: 2 },
//      { name: "Виноград", price: 440, quantity: 3 },
//      { name: "Банан", price: 125, quantity: 3 },
//    ];

// function calcTotalPrice(fruits, fruitName) {
//     let res = 0;
//     for (const fruit of fruits) {   
//         if (fruitName === fruit.name) {
//             res += fruit.price * fruit.quantity;
            
//         }   
//     }
//     return `${fruitName} : ${res}`;
// } 

  

// console.log(calcTotalPrice(fruits, "Банан"));
// console.log(calcTotalPrice(fruits, "Гриб"));
// console.log(calcTotalPrice(fruits, "Груша"));







// Створіть телефонну книгу - об'єкт phonebook,
// у якого є властивість contacts (список контактів)
// та методи управління книгою:
// add(data) - приймає об'єкт data, де передається
// name і email, category може передаватись чи ні,
// всередині метода add створіть обʼєкт newContact з властивостями  name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());
// і додає newContact до списку контактів contacts;
// не забудьте додати перевірку, якщо контакт з таким ім'ям чи імейлом вже є - ми його не додаємо
// list() - виводить список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.);
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - змінює ім'я контакта;


// const phonebook = {
//     contacts: [

//     ],
//     add(data) {
//         if (!data.name || !data.email) {
//             return
//         }
//         const isDuplicate = this.contacts.some(contact => contact.name === data.name || contact.email === data.email);
//         if (isDuplicate) {
//             return;
//         }
//         const newContact = {
//             name: data.name,
//             email: data.email,
//             category: data.category ? data.category : "default",
//             id: this.generateId(),
//             createdAt: this.getDate(),
//         }
//         this.contacts.push(newContact)
//     },
//     list() {
//         console.table(this.contacts);
//     },
//     filtered(category) {
//         const result = this.contacts.filter(contact => contact.category === category);
//         console.table(result);
//     },
//     delete(name) {
//         this.contacts = this.contacts.filter(contact => contact.name !== name);
//     },
//     updateName(oldName, newName) {
//         const contact = this.contacts.find(contact => contact.name === oldName);
//         if (contact) {
//             contact.name = newName;
//          };
//     },
//     generateId() {
//       return "#" + Math.random().toString(36).substr(2, 9);
//     },
//     getDate() {
//       return Date.now();
//     },
// };
  

// phonebook.add({
//     name: "Alice",
//     email: "alice@gmail.com",
//     category: "friends"
// });
  
// phonebook.add({ name: "Bob", email: "bob@gmail.com", category: "work" });
// phonebook.add({ name: "John", email: "john@gmail.com" });

// phonebook.list()

// phonebook.filtered("friends");

// phonebook.delete("Alice");
// phonebook.list();

// phonebook.updateName("Bob", "Robert");
// phonebook.list();