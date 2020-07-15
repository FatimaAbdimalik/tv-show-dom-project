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
    Div.style.height = "30rem";
    Div.style.marginTop = "50px";
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
  let num = allEpisodes.filter((item) =>
    // console.log(`Displaying ${num}/73 episodes`);
    (item.name + item.summary).toLowerCase().includes(values)
  ).length;
  console.log(`Displaying ${num}/73 episodes`);
  return (displayNum.innerHTML = `Displaying ${num}/73 episodes`);
}

window.onload = setup;
