/* ********************************************************** */
/* JAVASCRIPT PÅ NYE MÅDER 1 */
/* TEMPLATE LITERALS */
/* ********************************************************** */
 
const builtParagraf = document.querySelector("#builtParagraf");
const builtBtn = document.querySelector("#builtBtn");
builtBtn.addEventListener("click", buildParagraf);
let theme = "template literals";
let argument = "det er lettere at skrive og læse";
let reference = "Artikel om template literals";
let link = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals";

// *********** FØR **********************************************
// Før har vi lavet tekststrenge sådan her
function buildParagraf() {
  builtParagraf.innerHTML = "<p>Når vi skriver i " + theme + " er " + argument + ". </p>" + "<a href='" + link + "' target='_blank'>" + reference + "</a>";
}

// *********** NU **********************************************
// Nu laver vi tekststrenge sådan her
// function buildParagraf() {
//   builtParagraf.innerHTML = `<p>Når vi skriver i ${theme} er ${argument}. </p><a href='${link}' target='_blank'>${reference}</a>`;
// }

/* ********************************************************** */
/* JAVASCRIPT PÅ NYE MÅDER 2 */
/* TERNARY OPERATOR */
/* ********************************************************** */

const switchBtn = document.querySelector("#switchBtn");
const mainTxt = document.querySelector("#mainTxt");

switchBtn.addEventListener("click", setClass);

let myClass,
  myCondition = true,
  myAct;

// *********** FØR **********************************************
// Sådan har vi skrevet if-sætninger hidtil
function setClass() {
  mainTxt.classList = "";
  if (myCondition === true) {
    myClass = "active";
    myAct = "Deactivate";
    myCondition = false;
  } else {
    myClass = "inactive";
    myAct = "Activate";
    myCondition = true;
  }
  mainTxt.classList.add(myClass);
  switchBtn.textContent = myAct;
}
// *********** NU **********************************************
// Sådan kan vi skrive det med en ternary operator
// function setClass() {
//   mainTxt.classList = "";
//   myClass = myCondition ? "active" : "inactive";
//   myAct = myCondition ? "Deactivate" : "Activate";
//   myCondition = myCondition ? false : true;

//   mainTxt.classList.add(myClass);
//   switchBtn.textContent = myAct;
// }

/* ********************************************************** */
/* JAVASCRIPT PÅ NYE MÅDER 3 */
/* ARROW FUNCTIONS */
/* ********************************************************** */

const headBtn = document.querySelector("#headBtn");
const paraBtn = document.querySelector("#paraBtn");
const linkBtn = document.querySelector("#linkBtn");
const newHeadline = document.querySelector("#newHeadline");
const newParagraf = document.querySelector("#newParagraf");
const newLink = document.querySelector("#newLink");

// *********** FØR **********************************************
// Vi har før lavet eventListeners der peger på en funktion
headBtn.addEventListener("click", setHeadline);
function setHeadline() {
  let myHeadline = "Arrow functions";
  newHeadline.innerHTML = `<h1>${myHeadline}</h1>`;
}
paraBtn.addEventListener("click", setParagraf);
function setParagraf() {
  let myParagraf = "Arrow funktioner bruges når en funktion kun skal bruges i én bestemt situation. På den måde sørger vi i koden for, at andre dele af scriptet ikke kommer til at bruge functionen ved en fejl.";
  newParagraf.innerHTML = `<p>${myParagraf}</p>`;
}
linkBtn.addEventListener("click", setLink);
function setLink() {
  let myURL = "https://www.geeksforgeeks.org/arrow-functions-in-javascript/";
  newLink.innerHTML = `<a target="_blank" href="${myURL}">This is a link to a reasonable article on arrow functions</a>`;
}

// *********** NU **********************************************
// Nu laver vi funktionen direkte i eventListeneren
// headBtn.addEventListener("click", () => {
//   let myHeadline = "Arrow functions";
//   newHeadline.innerHTML = `<h1>${myHeadline}</h1>`;
// });

// paraBtn.addEventListener("click", () => {
//   let myParagraf = "Arrow funktioner bruges når en funktion kun skal bruges i én bestemt situation. På den måde sørger vi i koden for, at andre dele af scriptet ikke kommer til at bruge functionen ved en fejl.";
//   newParagraf.innerHTML = `<p>${myParagraf}</p>`;
// });

// linkBtn.addEventListener("click", () => {
//   let myURL = "https://www.geeksforgeeks.org/arrow-functions-in-javascript/";
//   newLink.innerHTML = `<a target="_blank" href="${myURL}">This is a link to a reasonable article on arrow functions</a>`;
// });
