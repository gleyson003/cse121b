/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templeElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    let templeArticle = document.createElement("article");
    let templeName = document.createElement("h3");
    let templeImg = document.createElement("img");
    templeName.textContent = temple.templeName;
    templeImg.setAttribute("src", temple.imageUrl);
    templeImg.setAttribute("alt", temple.location);
    templeArticle.appendChild(templeName);
    templeArticle.appendChild(templeImg);
    templeElement.appendChild(templeArticle);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch(
    "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
  );

  if (response.ok) {
    const data = await response.json();
    templeList = data;
    displayTemples(templeList);
  }
};

/* reset Function */
function reset() {
  templeElement.innerHTML = "";
}

/* filterTemples Function */
function filterTemples(temples) {
  reset();

  const filter = document.getElementById("filtered").value;

  switch (filter) {
    case "utah":
      displayTemples(
        temples.filter((temple) => temple.location.includes("Utah"))
      );
      break;
    case "notutah":
      displayTemples(
        temples.filter((temple) => !temple.location.includes("Utah"))
      );
      break;
    case "older":
      displayTemples(
        temples.filter(
          (temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)
        )
      );
      break;
    case "all":
    default:
      displayTemples(temples);
  }
}

getTemples();

/* Event Listener */
document.querySelector('#filtered').addEventListener("change", () => {filterTemples(templeList) });