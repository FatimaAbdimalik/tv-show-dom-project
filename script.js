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
    Div.className = "card";
    let titleDiv = document.createElement("div");
    titleDiv.style.backgroundColor = "white";
    titleDiv.style.border = "2px solid black";
    titleDiv.style.borderRadius = "1px";
    titleDiv.style.width = "20rem";
    titleDiv.style.marginBottom = "10px";
    titleDiv.style.marginTop = "10px";
    titleDiv.style.textAlign = "center";
    titleDiv.style.paddingTop = "8px";
    titleDiv.style.paddingBottom = "8px";
    // Div.style.width = "20rem";
    // Div.style.height = "24rem";
    // Div.style.marginTop = "50px";
    // Div.style.marginLeft = "35px";
    // Div.style.marginBottom = "50px";
    // Div.style.backgroundColor = "white";
    // Div.style.padding = "5px 10px 10px";
    // Div.style.borderRadius = "15px";
    // Div.style.border = "10px solid black";
    let epsName = document.createElement("h4");
    let epSummary = document.createElement("p");
    let epImage = document.createElement("img");
    epsName.textContent = `${element.name}-S${addPad(element.season)}E${addPad(
      element.number
    )}`;
    epSummary.innerHTML = element.summary;
    epImage.src = element.image.medium;
    rootElem.appendChild(cardContainer);
    cardContainer.appendChild(Div);
    Div.appendChild(titleDiv);
    titleDiv.appendChild(epsName);
    Div.appendChild(epImage);
    Div.appendChild(epSummary);
  });
}
function addPad(n) {
  return n < 10 ? n.toString().padStart(2, "0") : n.toString();
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
let select = document.getElementById("episodes");
let data = allEpisodes;
data
  .map((p) => `S${addPad(p.season)}E${addPad(p.number)} - ${p.name}`)
  .forEach((item) => {
    let option = document.createElement("option");
    option.innerHTML = item;
    select.appendChild(option);
  });

select.addEventListener("change", selectEpisode);
function selectEpisode() {
  let valueOfSele = select.value;
  console.log(valueOfSele);

  let selectedEp = allEpisodes.filter((ep) => valueOfSele.includes(ep.name));
  console.log(selectedEp);

  if (valueOfSele === "all") {
    makePageForEpisodes(allEpisodes);
  } else {
    makePageForEpisodes(selectedEp);
  }
}
window.onload = setup;
