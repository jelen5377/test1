const form = document.getElementById("calculator-form");
const numberA = document.getElementById("number-a");
const numberB = document.getElementById("number-b");
const operation = document.getElementById("operation");
const resultValue = document.getElementById("result-value");

function calculate(a, b, op) {
  switch (op) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return b === 0 ? "Nelze delit nulou" : a / b;
    default:
      return "Neznama operace";
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const a = Number(numberA.value);
  const b = Number(numberB.value);
  const result = calculate(a, b, operation.value);

  resultValue.textContent =
    typeof result === "number" ? String(result) : result;
});
