let calculator = "0";

function handleSelectChange(e) {
  const contents = document.getElementsByClassName("main-calculator-content");
  for (let i = 0; i < contents.length; i++) {
    contents[i].classList.remove("d-none");
    contents[i].classList.remove("d-block");
    contents[i].classList.add("d-none");
  }
  const resultContents = document.getElementsByClassName("result-value");
  for (let i = 0; i < resultContents.length; i++) {
    resultContents[i].innerText = 0;
  }
  document.getElementsByClassName("result-rect")[0].style.width = "0";
  document.getElementsByClassName("result-rect")[0].style.height = "0";
  document
    .getElementsByClassName("calculator-type-" + e.value)[0]
    .classList.add("d-block");
  calculator = e.value;
}

function handleClickClearBtn() {
  const inputContents = document.getElementsByClassName("input-value");
  for (let i = 0; i < inputContents.length; i++) {
    inputContents[i].value = 0;
  }
  const resultContents = document.getElementsByClassName("result-value");
  for (let i = 0; i < resultContents.length; i++) {
    resultContents[i].innerText = 0;
  }
  document.getElementsByClassName("result-rect")[0].style.width = "0";
  document.getElementsByClassName("result-rect")[0].style.height = "0";
}

function handleClickCalBtn() {
  const content = document.getElementsByClassName(
    "calculator-type-" + calculator
  )[0];
  const inputs = content.getElementsByTagName("input");
  let x, y, result;
  switch (calculator) {
    case "0":
      break;
    case "1":
      x = inputs[0].value;
      y = inputs[1].value;
      result = (x * 100) / y;
      content.getElementsByClassName("result-value")[0].innerText = result;
      document.getElementsByClassName("result-rect")[0].style.width =
        (200 * result) / 100 + "px";
      document.getElementsByClassName("result-rect")[0].style.height = "200px";
      break;
    case "2":
      x = inputs[0].value;
      y = inputs[1].value;
      result = (x * y) / 100;
      content.getElementsByClassName("result-value")[0].innerText = result;
      document.getElementsByClassName("result-rect")[0].style.width =
        (200 * 18) / 100 + "px";
      document.getElementsByClassName("result-rect")[0].style.height = "200px";
      break;
    default:
      break;
  }
}
