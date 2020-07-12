var fact = document.getElementById("fact");
var factText = document.getElementById("fact-text");

var numberInput = document.getElementById("numberInput");

numberInput.addEventListener("input", getFactAjax);

function getFactAjax() {
  var number = numberInput.value;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://numbersapi.com/" + number);
  xhr.onload = function () {
    if (this.status == 200 && number != "") {
      fact.style.display = "block";
      factText.innerText = this.responseText;
    } else if (number == "") fact.style.display = "none";
  };
  xhr.send();
}
