let title = document.getElementById("title");
let amount = document.getElementById("amount");
// const transactionTitle = document.getElementById("incomeTitle");
// const transactionAmount = document.getElementById("incomeAmount");

function addTransaction() {
  document.getElementById("incomeTitle").innerHTML = title.value;
  document.getElementById("incomeAmount").innerHTML = amount.value;
}
function subtructTransaction() {
  document.getElementById("outcomeTitle").innerHTML = title.value;
  document.getElementById("outcomeAmount").innerHTML = amount.value;
}

incomeBtn.addEventListener("click", addTransaction);
outcomeBtn.addEventListener("click", subtructTransaction);

const incomeVal = parseInt(document.getElementById("incomeAmount").innerHTML);
const outcomeVal = parseInt(document.getElementById("outcomeAmount").innerHTML);
const sum = incomeVal - outcomeVal;
function calculateSum() {
  //   const sum = incomeVal - outcomeVal;
  document.getElementById("sum").innerHTML = sum;
}
