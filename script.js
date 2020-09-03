//You can edit ALL of the code here
let body = document.getElementById("background");
const cardContainer = document.getElementById("cardContainer");
const rootElem = document.getElementById("root");
const displayNum = document.getElementById("display");
let allEpisodes = [];
let pickAnEpisode = getAllEpisodes();
const allShow = getAllShows();
const showSelector = document.getElementById("show");
//*******Alphabetical sorting of shows */
function compare(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

const sortedShows = allShow.sort(compare);

///****Show selector creation */
// showSelector.addEventListener("change",createShowSelector)

function createShowSelector() {
  sortedShows.forEach((item) => {
    let option = document.createElement("option");
    option.value = item.id;
    option.innerHTML = item.name;
    showSelector.appendChild(option);
  });
  // console.log(showSelector);
}

/**********pick a show, change page to choosen show's episodes, create an eventlister that does the fectch and call it main function**********/
showSelector.addEventListener("change", fetchShow);

function fetchShow() {
  let selecVal = showSelector.value;
  let choosenShow = sortedShows
    .filter((show) => show.id == selecVal)
    .map((p) => p.id)
    .toString();
  fetch(`https://api.tvmaze.com/shows/${choosenShow}/episodes`)
    .then((res) => res.json())
    .then((data) => {
      console.log;
      makePageForEpisodes(data);
    });
}
function setup() {
  fetch("https://api.tvmaze.com/shows/82/episodes")
    .then((res) => res.json())
    .then((data) => {
      allEpisodes = data;
      makePageForEpisodes(allEpisodes);
    });
  createShowSelector();
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
    titleDiv.className = "headerCard";
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
  // if (episodes) {
  //   console.log(`episodes from episodes, ${episodes}`);
  //   values.style.color = "yellow";
  // }
  return (displayNum.innerHTML = `Displaying ${episodes.length}/73 episodes`);
}
// level 300
let select = document.getElementById("episodes");
let data = pickAnEpisode;
data.forEach((item) => {
  let option = document.createElement("option");
  option.value = item.id;
  option.innerHTML = `S${addPad(item.season)}E${addPad(item.number)} - ${
    item.name
  }`;
  select.appendChild(option);
});
console.log(select);
console.log(data);

select.addEventListener("change", selectEpisode);
function selectEpisode() {
  let valueOfSele = select.value;
  console.log(valueOfSele);
  let selectedEp = data.filter((ep) => ep.id == valueOfSele);

  if (valueOfSele === "all") {
    makePageForEpisodes(data);
  } else {
    makePageForEpisodes(selectedEp);
  }
}
window.onload = setup;
