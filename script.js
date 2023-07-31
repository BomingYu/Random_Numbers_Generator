function startRun() {
  interalId = setInterval(getRandomRange, 1000 / 10);
}

function stopRun() {
  clearInterval(interalId);
}

function getRandomRange() {
  setPosition();

  var min = Number(document.getElementById("rangeMin").value);
  var max = Number(document.getElementById("rangeMax").value);
  if (min <= max) {
    if (min <= 1000000 && max <= 100000 && min >= 0 && max >= 0) {
      var numOfRand = document.querySelectorAll("[id^=resultHeaderId]").length;
      for (let i = 1; i <= numOfRand; i++) {
        var randNum = Math.floor(Math.random() * (max - min + 1)) + min;
        //console.log(randomInt);
        document.getElementById("resultHeaderId" + i).textContent = randNum;
      }
    } else {
      alert(
        "Numbers set are out of range! The range must be 0 to 100000"
      );
      document.getElementById("rangeMin").value = 0;
      document.getElementById("rangeMax").value = 0;
    }
  } else {
    alert("Minimum number can not be greater than maximum number!");
    document.getElementById("rangeMin").value = 0;
    document.getElementById("rangeMax").value = 0;
  }
}

function setPosition() {
  var numberText = document.getElementById("numberText").value;
  if (!isNaN(numberText)) {
    let convertedNum = Number(numberText);
    if (Number.isInteger(convertedNum)) {
      if (convertedNum > 0) {
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
      } else {
        alert(
          "The Number in the first text Box must be an integer greater than 0!"
        );
        document.getElementById("numberText").value = 1;
      }
    } else {
      alert(
        "The Number in the first text Box must be an integer greater than 0!"
      );
      document.getElementById("numberText").value = 1;
    }
  } else {
    alert("Invalied input in the first text box!");
    document.getElementById("numberText").value = 1;
  }
}
