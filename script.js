const addition = document.querySelector("#addition");
addition.addEventListener("click", () => {
  const numOne = +document.querySelector("#inputFiledOne").value;
  const numTwo = +document.querySelector("#inputFiledTwo").value;
  alert(numOne + numTwo);
});
