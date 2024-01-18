let calculator = "0";

function max(a, b) {
  return Number(a) > Number(b) ? a : b;
}
function min(a, b) {
  return Number(a) < Number(b) ? a : b;
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
  document.getElementsByClassName("result-rect")[0].classList.add("d-none");
  document.getElementsByClassName("result-y-arrow")[0].classList.add("d-none");
  document.getElementsByClassName("result-x-arrow")[0].classList.add("d-none");
  document.getElementsByClassName("result-x-line")[0].classList.add("d-none");
  document.getElementsByClassName("result-text-x0")[0].classList.add("d-none");
  document.getElementsByClassName("result-text-x")[0].classList.add("d-none");
  document.getElementsByClassName("result-text-y")[0].classList.add("d-none");
}

function handleClickCalBtn() {
  document.getElementsByClassName("result-y-arrow")[0].classList.add("d-none");
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
      console.log(x, y, x_, y_);
      console.log(max(x, x_), max(y, y_), max(max(x, x_), max(y, y_)));
      console.log(unit);
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
      document
        .getElementsByClassName("result-x-arrow")[0]
        .classList.remove("d-none");
      document
        .getElementsByClassName("result-x-line")[0]
        .classList.remove("d-none");
      if (unit * y_ >= 16)
        document
          .getElementsByClassName("result-y-arrow")[0]
          .classList.remove("d-none");
      document.getElementsByClassName("result-text-x0")[0].innerText =
        (result > 0 ? "+" : "") + result + "%";
      document.getElementsByClassName("result-text-y")[0].innerText =
        (result_ > 0 ? "+" : "") + result_ + "%";
      document
        .getElementsByClassName("result-text-x0")[0]
        .classList.remove("d-none");
      document
        .getElementsByClassName("result-text-y")[0]
        .classList.remove("d-none");
      if (unit * y_ < 50) {
        document.getElementsByClassName("result-text-y")[0].style.right =
          unit * y_ + 10 + "px";
        document.getElementsByClassName("result-text-y")[0].style.top =
          (unit * x_) / 2 - 15 + "px";
      } else {
        document.getElementsByClassName("result-text-y")[0].style.right =
          (unit * y_) / 2 - 30 + "px";
        document.getElementsByClassName("result-text-y")[0].style.top =
          (unit * x_) / 2 - 30 + "px";
      }
      document.getElementsByClassName("result-text-x0")[0].style.top =
        (x_ * unit) / 2 - 25 + "px";
      break;
    case "1":
      x = inputs[0].value;
      y = inputs[1].value;
      result = (x * 100) / y;
      content.getElementsByClassName("result-value")[0].innerText = result;
      document.getElementsByClassName("result-rect")[0].style.width =
        (200 * result) / 100 + "px";
      document.getElementsByClassName("result-rect")[0].style.height = "200px";
      if (result >= 8)
        document
          .getElementsByClassName("result-y-arrow")[0]
          .classList.remove("d-none");
      document.getElementsByClassName("result-text-x")[0].innerText = y;
      document.getElementsByClassName("result-text-y")[0].innerText = x;
      document
        .getElementsByClassName("result-text-x")[0]
        .classList.remove("d-none");
      document
        .getElementsByClassName("result-text-y")[0]
        .classList.remove("d-none");
      if (result > 20) {
        document.getElementsByClassName("result-text-y")[0].style.right =
          result - 10 + "px";
        document.getElementsByClassName("result-text-y")[0].style.top = "70px";
      } else {
        document.getElementsByClassName("result-text-y")[0].style.right =
          "-30px";
        document.getElementsByClassName("result-text-y")[0].style.top = "85px";
      }
      break;
    case "2":
      x = inputs[0].value;
      y = inputs[1].value;
      result = (x * y) / 100;
      content.getElementsByClassName("result-value")[0].innerText = result;
      document.getElementsByClassName("result-rect")[0].style.width =
        (200 * x) / 100 + "px";
      document.getElementsByClassName("result-rect")[0].style.height = "200px";
      if (result >= 8)
        document
          .getElementsByClassName("result-y-arrow")[0]
          .classList.remove("d-none");
      document.getElementsByClassName("result-text-x")[0].innerText = y;
      document.getElementsByClassName("result-text-y")[0].innerText = result;
      document
        .getElementsByClassName("result-text-x")[0]
        .classList.remove("d-none");
      document
        .getElementsByClassName("result-text-y")[0]
        .classList.remove("d-none");
      if (x > 10) {
        document.getElementsByClassName("result-text-y")[0].style.right =
          x - 10 + "px";
        document.getElementsByClassName("result-text-y")[0].style.top = "70px";
      } else {
        document.getElementsByClassName("result-text-y")[0].style.right =
          "-30px";
        document.getElementsByClassName("result-text-y")[0].style.top = "85px";
      }
      break;
    default:
      break;
  }
  document.getElementsByClassName("result-rect")[0].classList.remove("d-none");
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
