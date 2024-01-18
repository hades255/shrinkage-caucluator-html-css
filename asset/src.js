let calculator = "0";

function max(a, b) {
  return a > b ? a : b;
}

function handleSelectChange(e) {
  handleClickClearBtn();
  const contents = document.getElementsByClassName("main-calculator-content");
  for (let i = 0; i < contents.length; i++) {
    contents[i].classList.remove("d-none");
    contents[i].classList.remove("d-block");
    contents[i].classList.add("d-none");
  }
  document
    .getElementsByClassName("calculator-btn-group-preview")[0]
    .classList.add("d-none");

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
  document.getElementsByClassName("result-origin-rect")[0].style.width =
    "200px";
  document.getElementsByClassName("result-origin-rect")[0].style.height =
    "200px";
  document
    .getElementsByClassName("calculator-btn-group-result")[0]
    .classList.add("d-none");
}

function handleClickCalBtn() {
  const content = document.getElementsByClassName(
    "calculator-type-" + calculator
  )[0];
  const inputs = content.getElementsByTagName("input");
  let x, y, result, x_, y_, result_;
  switch (calculator) {
    case "0":
      document
        .getElementsByClassName("calculator-btn-group-result")[0]
        .classList.remove("d-none");
      x = inputs[0].value;
      y = inputs[1].value;
      x_ = inputs[2].value;
      y_ = inputs[3].value;
      let unit;
      unit = 200 / max(max(x, x_), max(y, y_));
      document.getElementsByClassName("result-origin-rect")[0].style.width =
        y * unit + "px";
      document.getElementsByClassName("result-origin-rect")[0].style.height =
        x * unit + "px";
      document.getElementsByClassName("result-rect")[0].style.width =
        y_ * unit + "px";
      document.getElementsByClassName("result-rect")[0].style.height =
        x_ * unit + "px";

      result = (((x_ - x) / x) * 100).toFixed(1);
      result_ = (((y_ - y) / y) * 100).toFixed(1);
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

function handleClickBackBtn() {
  document
    .getElementsByClassName("calculator-btn-group-cal")[0]
    .classList.remove("d-none");
  document
    .getElementsByClassName("calculator-btn-group-result")[0]
    .classList.remove("d-none");
  document
    .getElementsByClassName("calculator-btn-group-preview")[0]
    .classList.add("d-none");
  document
    .getElementsByClassName("main-calculator-inputboard")[0]
    .classList.remove("d-none");
  document
    .getElementsByClassName("main-calculator-preview")[0]
    .classList.add("d-none");
}

function handleClickPreviewBtn() {
  const content = document.getElementsByClassName(
    "calculator-type-" + calculator
  )[0];
  const inputs = content.getElementsByTagName("input");
  let x, y, result, x_, y_, result_;
  document
    .getElementsByClassName("calculator-btn-group-result")[0]
    .classList.remove("d-none");
  x = inputs[0].value;
  y = inputs[1].value;
  x_ = inputs[2].value;
  y_ = inputs[3].value;
  result = (((x_ - x) / x) * 100).toFixed(1);
  result_ = (((y_ - y) / y) * 100).toFixed(1);
  document.getElementsByClassName("calculator-preview-input-0")[0].innerText =
    x;
  document.getElementsByClassName("calculator-preview-input-1")[0].innerText =
    y;
  document.getElementsByClassName("calculator-preview-input-2")[0].innerText =
    x_;
  document.getElementsByClassName("calculator-preview-input-3")[0].innerText =
    y_;
  document.getElementsByClassName("calculator-preview-result-0")[0].innerText =
    (result_ > 0 ? "+" : "") + result_;
  document.getElementsByClassName("calculator-preview-result-1")[0].innerText =
    (result > 0 ? "+" : "") + result;
  let unit;
  unit = 200 / max(max(x, x_), max(y, y_));
  document.getElementsByClassName("result-origin-rect")[0].style.width =
    y * unit + "px";
  document.getElementsByClassName("result-origin-rect")[0].style.height =
    x * unit + "px";
  document.getElementsByClassName("result-rect")[0].style.width =
    y_ * unit + "px";
  document.getElementsByClassName("result-rect")[0].style.height =
    x_ * unit + "px";
  document.getElementsByClassName("calculator-result-fabric")[0].innerText =
    document.getElementsByClassName("calculator-select-fabric")[0].value;
  document.getElementsByClassName("calculator-result-wash")[0].innerText =
    document.getElementsByClassName("calculator-select-wash")[0].value;

  document
    .getElementsByClassName("calculator-btn-group-cal")[0]
    .classList.add("d-none");
  document
    .getElementsByClassName("calculator-btn-group-result")[0]
    .classList.add("d-none");
  document
    .getElementsByClassName("calculator-btn-group-preview")[0]
    .classList.remove("d-none");
  document
    .getElementsByClassName("main-calculator-inputboard")[0]
    .classList.add("d-none");
  document
    .getElementsByClassName("main-calculator-preview")[0]
    .classList.remove("d-none");
}
