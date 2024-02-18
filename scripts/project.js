// Titles at page
document.getElementById("titlePage").innerHTML = "Heroes Vx Villains";
document.getElementById("heroesTitleList").innerHTML = "Heroes List";
document.getElementById("villainsTitleList").innerHTML = "Villains List";


// Global Variables
let heroes = [];
let villains = [];

let heroUl = document.getElementById("heroeslist");
let villainUl = document.getElementById("villainslist");

const inputSearch1 = document.getElementById("search1");
const inputSearch2 = document.getElementById("search2");
const heroNoFinded = document.getElementById("heroNoFinded");
const villainNoFinded = document.getElementById("villainNoFinded");

// Lists functions
const heroesList = (heroes) => {
  heroes.forEach((hero) => {
    let heroLi = document.createElement("li");
    let heroImg = document.createElement("img");

    heroLi.textContent = hero.name;
    heroLi.classList.add("hero");

    heroImg.setAttribute("src", hero.images.lg);
    heroImg.setAttribute("alt", `${hero.name} Image`);
    heroUl.appendChild(heroLi);
    heroLi.appendChild(heroImg);
  });
};

const villainsList = (villains) => {
  villains.forEach((villain) => {
    let villainLi = document.createElement("li");
    let villainImg = document.createElement("img");

    villainImg.setAttribute("src", villain.images.lg);
    villainImg.setAttribute("alt", `${villain.name} Image`);
    villainLi.classList.add("villain");

    villainLi.textContent = villain.name;
    villainLi.appendChild(villainImg);
    villainUl.appendChild(villainLi);
  });
};

// Using fetch to get the api
const getHeros = async () => {
  const url = "https://superhero-search.p.rapidapi.com/api/heroes";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "62999a1796msh788d5f7d49e1fb0p18d8ccjsn331396180d99",
      "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    heroes = result;
    heroesList(heroes);
  } catch (error) {
    console.error(error);
  }
};

const getVillains = async () => {
  const url = "https://superhero-search.p.rapidapi.com/api/villains";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "62999a1796msh788d5f7d49e1fb0p18d8ccjsn331396180d99",
      "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    villains = result;
    villainsList(villains);
  } catch (error) {
    console.error(error);
  }
};

// Remove functions
function resetHeroes() {
  heroUl.innerHTML = "";
}

function resetVillains() {
  villainUl.innerHTML = "";
}

//Filter functions
const heroFilter = (event) => {
  event.preventDefault();

  const heroInput = document.getElementById("heroSearch").value.toLowerCase();
  const heroFinded = heroes.find((hero) =>
    hero.name.toLowerCase().includes(heroInput)
  );

  if (heroFinded) {
    resetHeroes();
    heroesList([heroFinded]);
    heroNoFinded.textContent = "";
  } else {
    heroNoFinded.textContent = "Hero no finded!";
  }
};

const villainFilter = (event) => {
  event.preventDefault();

  const villainInput = document
    .getElementById("villianSearch")
    .value.toLowerCase();
  const villainFinded = villains.find((villain) =>
    villain.name.toLowerCase().includes(villainInput)
  );

  if (villainFinded) {
    resetVillains();
    villainsList([villainFinded]);
    villainNoFinded.textContent = "";
  } else {
    villainNoFinded.textContent = "Villain no finded!";
  }
};

//Clean the search input filter
inputSearch1.addEventListener("search", function () {
  resetHeroes();
  heroesList(heroes);
  heroNoFinded.textContent = "";
});

inputSearch2.addEventListener("search", function (event) {
  resetVillains();
  villainsList(villains);
  villainNoFinded.textContent = "";
});

//Filter event listener
inputSearch1.addEventListener("submit", heroFilter);
inputSearch2.addEventListener("submit", villainFilter);

getHeros();
getVillains();
