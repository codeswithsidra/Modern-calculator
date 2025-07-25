let expression = "";
const input = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");

const operators = ["+", "-", "*", "/", "%", "."];

buttons.forEach(button => {
  button.addEventListener("click", e => {
    const value = e.target.innerText;

    if (value === "=") {
      const lastChar = expression.slice(-1);

      // Prevent evaluation if last character is an operator
      if (operators.includes(lastChar)) {
        input.value = expression;
        return;
      }

      try {
        expression = eval(expression).toString();
        input.value = expression;
      } catch {
        input.value = expression;
        expression = "";
      }
    } else if (value === "DEL") {
      expression = expression.slice(0, -1);
      input.value = expression;
    } else if (value === "AC") {
      expression = "";
      input.value = "";
    } else {
      const lastChar = expression.slice(-1);

      // Prevent multiple operators
      if (operators.includes(value) && operators.includes(lastChar)) {
        return;
      }

      expression += value;
      input.value = expression;
    }
  });
});
