//! Завдання 1:


// 1 - отримай body елемент і виведи його в консоль;

// const bodyEl = document.querySelector("body");
// console.log(bodyEl);

// // 2 - отримай елемент id="title" і виведи його в консоль;

// const idTitleEl = document.querySelector("#title");
// console.log(idTitleEl);


// // 3 - отримай елемент class="list" і виведи його в консоль;

// const listEl = document.querySelector(".list");
// console.log(listEl);


// // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;

// const dataTopic = document.querySelectorAll('[data-topic]');
// console.log(dataTopic);


// // 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

// const firstEldataTopic = dataTopic[0];
// console.log(firstEldataTopic);


// // 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

// const lastEldataTopic = dataTopic[dataTopic.length - 1];
// console.log(lastEldataTopic);


// // 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;

// const nextSibling = idTitleEl.nextElementSibling;
// console.log(nextSibling);


// // 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

// const subTitles = document.querySelectorAll("h3");
// console.log(subTitles);


// // 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

// subTitles.forEach((subTitles) => subTitles.classList.add("active"));

// // 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;

// const liEl = document.querySelector('[data-topic = "navigation"]');
// console.log(liEl);

// // 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

// liEl.style.backgroundColor = "yellow";

// // 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

// const pEl = liEl.querySelector("p");
// pEl.textContent = "Я змінив тут текст!";

// // 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

// const currentTopic = "manipulation";
// const manipulation = document.querySelector(`[data-topic = "${currentTopic}"]`);
// console.log(manipulation);

// // 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

// manipulation.style.backgroundColor = "lightblue"

// // 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

// const titleCompleted = document.querySelector(".completed");
// console.log(titleCompleted);


// // 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

// titleCompleted.parentNode.remove();
// console.log(listEl);


// // 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"

// // const newParagraph = document.createElement("p");
// // newParagraph.textContent = "Об'єктна модель документа (Document Object Model)";
// idTitleEl.insertAdjacentHTML("afterend", "<p>Об'єктна модель документа (Document Object Model)</p>");


// // 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML"
// //  а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу".
// // тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

// const newLi = document.createElement("li");
// listEl.append(newLi)
// const newTitle = document.createElement("h3");
// newTitle.textContent = "Властивість innerHTML";
// const newtext = document.createElement("p");
// newtext.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу"
// newLi.append(newTitle, newtext);

// console.log(listEl);



// // 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

// listEl.insertAdjacentHTML("beforeend", `<li>
//     <h3>"Властивість innerHTML"</h3>
//     <p>"Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу"</p>
//     </li>`)

// // 20 - очисти список

// // listEl.innerHTML = "";



//! Завдання 2:

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// const newDiv = 




//! Завдання 3:

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// const input = document.querySelector(".js-username-input");

// input.addEventListener('input', checkInputValue);

// function checkInputValue() { 
//     const inputValue = input.value.trim();
//     // input.classList.remove("success", "error")
//     // if (inputValue.length >= 6) {
//     //     input.classList.add("success");
        
//     // } else {
//     //     input.classList.add("error")
//     // }

//     input.classList.toggle("success", inputValue.length >= 6);
//     input.classList.toggle("error", inputValue.length < 6)
// };


// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

// const form = document.querySelector(".js-contact-form");
// const input = document.querySelector(".js-username-input");
// const span = document.querySelector(".js-username-output");

// form.addEventListener("submit", onFormSubmit);
// input.addEventListener("input", () => {
//     const inputValue = input.value.trim();
//     if (inputValue === "") {
//         span.textContent = "Anonymous";
//     } else {
//         span.textContent = inputValue;
//     }
// });

// function onFormSubmit(event) {
//   event.preventDefault();

//   //   const userNameValue = event.target.elements.userName.value.trim();
//   //   const accept = event.target.elements.accept.checked;
//   //   console.log(userNameValue, accept);
//   const [userName, accept] = event.target.elements;
//   const userNameValue = userName.value.trim();

//   if (userNameValue === "") {
// alert("Input cannot be empty!");
//     return;
//   }

//   if (!accept.checked) {
//     alert("Check checkbox!!!");
//     return;
//   }

//     const info = {
//         userName: userNameValue,
//     }
//     console.log(info);
    
//     form.reset();
//     span.textContent = "Anonymous";
// }








//! Завдання 4:

 // Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
 // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
 // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.