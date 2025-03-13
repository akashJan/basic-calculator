const addition = document.querySelector("#addition");
addition.addEventListener("click", () => {
  const numOne = +document.querySelector("#inputFiledOne").value;
  const numTwo = +document.querySelector("#inputFiledTwo").value;
  alert(numOne + numTwo);
});

const subtraction = document.querySelector("#subtraction");
subtraction.addEventListener("click", () => {
  const numOne = +document.querySelector("#inputFiledOne").value;
  const numTwo = +document.querySelector("#inputFiledTwo").value;
  alert(numOne - numTwo);
});

const multiplication = document.querySelector("#multiplication");
multiplication.addEventListener("click", () => {
  const numOne = +document.querySelector("#inputFiledOne").value;
  const numTwo = +document.querySelector("#inputFiledTwo").value;
  alert(numOne * numTwo);
});

const division = document.querySelector("#division");
division.addEventListener("click", () => {
  const numOne = +document.querySelector("#inputFiledOne").value;
  const numTwo = +document.querySelector("#inputFiledTwo").value;
  alert(numOne / numTwo);
});
