//You can edit ALL of the code here
let body = document.getElementById("background");
body.style.backgroundColor = "#D3D3D3";
const cardContainer = document.getElementById("cardContainer");
const rootElem = document.getElementById("root");

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
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
  // level 200
  let inputfield = document.getElementById("input");
  inputfield.addEventListener("keyup", findValue);
  // console.log(value);
  let text = document.createElement("p");
  inputfield.appendChild(text);

  function findValue() {
    let value = inputfield.value.toLowerCase();
    let episodes = episodeList
      .filter((ep) => ep.name + ep.summary)
      .toLowerCase()
      .includes(value);
    Div.appendChild(episodes);
    let num = episodeList.filter((item) =>
      (item.name + item.summary).toLowerCase().includes(value)
    ).length;
    console.log(`Displaying ${num}/73 episodes`);
    // let text = document.createElement("p");
    // inputfield.appendChild(text);

    return (text.innerHTML = `Displaying ${num}/73 episodes`);
  }
  // function livesearch() {
  //   let textInput = element.name;
  //   textInput.filter(letter=> inputfield.includes(letter))
  //   return
  // }
}

window.onload = setup;
