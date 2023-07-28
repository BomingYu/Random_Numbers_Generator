function startRun() {
  interalId = setInterval(getRandomRange,1000/10);
}

function stopRun() {
    clearInterval(interalId);
}

function getRandomRange() {
    setPosition();

  var min = Number(document.getElementById("rangeMin").value);
  var max = Number(document.getElementById("rangeMax").value);
  var numOfRand = document.querySelectorAll("[id^=resultHeaderId]").length;
  for (let i = 1; i <= numOfRand; i++) {
    var randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    //console.log(randomInt);
    document.getElementById("resultHeaderId" + i).textContent = randNum;
  }
}

function setPosition() {
  var numberText = document.getElementById("numberText").value;
  const resultBody = document.getElementById("resultDisplay");
  resultBody.innerHTML = "";
  for (let i = 1; i <= numberText; i++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "resultDiv");
    newDiv.setAttribute("id", "resultDivId" + i);

    const newHeader = document.createElement("h3");
    newHeader.setAttribute("class", "resultHeader");
    newHeader.setAttribute("id", "resultHeaderId" + i);
    newHeader.textContent = "X";

    newDiv.appendChild(newHeader);
    resultBody.appendChild(newDiv);
  }
}
