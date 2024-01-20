/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Gleyson Douglas Sampaio Lopes";
const currentYear = 2024;
const profilePicture = "images/my_photo.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${profilePicture}`);

/* Step 5 - Array */
let favoriteFoods = ["shepherd's pie", "Açaí"];
foodElement.innerHTML = `${favoriteFoods}`;

const newFavoriteFood = "Pasta with salsa of meet and Cheese";

favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.splice(0, 1);
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;

