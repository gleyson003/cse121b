/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {};

myProfile = {
    "name": "Gleyson Lopes",
};

myProfile.photo = "images/my_photo.png";
myProfile.favoriteFoods = ["shepherd's pie", "Açaí", "Pasta and Salsa"]
myProfile.hobbies = ["Play Games", "Listing to music", "Sing"]
myProfile.placesLived = []

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push( 
    {
        place: "Ananindeua-Pa, Brazil",
        length: "22 years",
    },
    {
        place: "Montevideo, Uruguay",
        length: "2 years",
    },
    {
        place: "Belém-PA, Brazil",
        length: "2 years",
    }
);

/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').textContent = myProfile.name;

/* Photo with attributes */
const photoElement = document.querySelector('img');
photoElement.setAttribute('src', myProfile.photo);
photoElement.setAttribute('alt', `Profile image of ${myProfile.photo}`);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = placeLived.place;
    dd.textContent = placeLived.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});

