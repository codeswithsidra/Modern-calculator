let expression = "";
const input = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");

const operators = ["+", "-", "*", "/", "%", "."];

buttons.forEach(button => {
  button.addEventListener("click", e => {
    const value = e.target.innerText;

    if (value === "=") {
      try {
        expression = eval(expression);
      } catch {
        expression = "Error";
      }
      input.value = expression;
    } else if (value === "DEL") {
      expression = expression.slice(0, -1);
      input.value = expression;
    } else if (value === "AC") {
      expression = "";
      input.value = "";
    } else {
      const lastChar = expression.slice(-1);

      // Prevent multiple consecutive operators
      if (operators.includes(value) && operators.includes(lastChar)) {
        return; // do nothing
      }

      expression += value;
      input.value = expression;
    }
  });
});
