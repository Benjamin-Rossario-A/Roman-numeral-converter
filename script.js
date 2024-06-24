const userInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");
const reference = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];

const checkUserInput = () => {
  const input = parseInt(userInput.value);
  if (input <= 0) {
    console.log("Please enter a number greater than or equal to 1.");
  } else if (input > 3999) {
    console.log("Please enter a number less than or equal to 3999.");
  } else {
    console.log("conversion possible");
  }
};

convertBtn.addEventListener("click", checkUserInput);
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    checkUserInput();
  }
});
