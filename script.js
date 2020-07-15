//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  let input = document.createElement("input");
  let body = document.getElementById("background");
  body.style.backgroundColor = "#D3D3D3";
  let cardContainer = document.getElementById("cardContainer");
  const rootElem = document.getElementById("root");
  // cardContainer.style.display = flex;
  // create a div card first then the rest then appenchild the rest
  episodeList.forEach((element) => {
    let Div = document.createElement("div");
    let titleDiv = document.createElement("div");
    titleDiv.style.backgroundColor = "white";
    titleDiv.style.border = "thin solid";
    titleDiv.style.borderRadius = "15px";
    titleDiv.style.width = "20rem";
    // titleDiv.style.height = "3rem";
    Div.style.width = "20rem";
    Div.style.height = "30rem";
    Div.style.marginTop = "50px";
    Div.style.marginBottom = "50px";
    Div.style.backgroundColor = "white";
    Div.style.padding = "5px 5px 10px 10px";
    Div.style.borderRadius = "15px";
    // Div.style.border = "thin solid";
    let epsName = document.createElement("h4");
    let epSeasonNum = document.createElement("p");
    let epNum = document.createElement("p");
    let epSummary = document.createElement("p");
    let epImage = document.createElement("img");
    epsName.textContent = `${element.name}-S0${element.season}E0${element.number}`;
    // epSeasonNum.textContent = `S0${element.season}E0${element.number}`;
    // epNum.textContent = `E0${element.number}`;
    epSummary.innerHTML = element.summary;
    epImage.src = element.image.medium;
    rootElem.appendChild(cardContainer);
    // titleDiv.insertAdjacentElement("afterend", Div);
    cardContainer.appendChild(Div);
    Div.appendChild(titleDiv);
    titleDiv.appendChild(epsName);
    // Div.appendChild(epsName);
    titleDiv.appendChild(epSeasonNum);
    titleDiv.appendChild(epNum);
    Div.appendChild(epImage);
    Div.appendChild(epSummary);
  });
}

window.onload = setup;
