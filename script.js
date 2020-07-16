//You can edit ALL of the code here
const allEpisodes = getAllEpisodes();
let body = document.getElementById("background");
body.style.backgroundColor = "#D3D3D3";
const cardContainer = document.getElementById("cardContainer");
const rootElem = document.getElementById("root");
const displayNum = document.getElementById("display");

function setup() {
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  cardContainer.innerHTML = "";
  let numOfEp = episodeList.length;
  displayNum.innerHTML = `Displaying ${numOfEp}/73 episodes`;
  // create a div card first then the rest then appenchild the rest
  episodeList.forEach((element) => {
    let Div = document.createElement("div");
    let titleDiv = document.createElement("div");
    titleDiv.style.backgroundColor = "white";
    titleDiv.style.border = "thin solid";
    titleDiv.style.borderRadius = "15px";
    titleDiv.style.width = "20rem";
    Div.style.width = "20rem";
    Div.style.height = "23rem";
    Div.style.marginTop = "50px";
    Div.style.marginLeft = "22px";
    Div.style.marginBottom = "50px";
    Div.style.backgroundColor = "white";
    Div.style.padding = "5px 5px 10px 10px";
    Div.style.borderRadius = "15px";
    let epsName = document.createElement("h4");
    let epSeasonNum = document.createElement("p");
    let epNum = document.createElement("p");
    let epSummary = document.createElement("p");
    let epImage = document.createElement("img");
    epsName.textContent = `${element.name}-S0${element.season}E0${element.number}`;

    epSummary.innerHTML = element.summary;
    epImage.src = element.image.medium;
    rootElem.appendChild(cardContainer);
    cardContainer.appendChild(Div);
    Div.appendChild(titleDiv);
    titleDiv.appendChild(epsName);
    titleDiv.appendChild(epSeasonNum);
    titleDiv.appendChild(epNum);
    Div.appendChild(epImage);
    Div.appendChild(epSummary);
  });
}
// level 200
let inputfield = document.getElementById("input");
inputfield.addEventListener("keyup", findValue);

function findValue() {
  let values = inputfield.value.toLowerCase();
  let episodes = allEpisodes.filter((ep) =>
    (ep.name + ep.summary).toLowerCase().includes(values)
  );
  makePageForEpisodes(episodes);
  console.log(`Displaying ${episodes.length}/73 episodes`);
  return (displayNum.innerHTML = `Displaying ${episodes.length}/73 episodes`);
}
// level 300
// make a function that takes all season and name;
// push to an array // map will store it as an array
// change options to match the season name // loop forEach and assign option
// once selected, page only load the selected one
// event listen that listen to click and allows all list to dropdown
// while loop to assig and appen all options

let select = document.getElementById("episodes");
select.addEventListener("mouseover", convertOption);
console.log(select);
function convertOption() {
  let data = allEpisodes
    .map((p) => `S${p.season}E0${p.number}-${p.name}`)
    .forEach((item) => {
      let option = document.createElement("option");
      option.innerHTML = item;
      select.appendChild(option);
    });
}
// convertOption();
window.onload = setup;
