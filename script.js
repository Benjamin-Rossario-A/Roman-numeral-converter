const userInput = document.getElementById("number"); //used to receive the input from User.
const convertBtn = document.getElementById("convert-btn"); //used to notify the input has been given by the user.
const result = document.getElementById("output"); //used to display the output to the User
const reference = [
  //contains all types roman numerals that are required for the conversion from integer datatype.
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
//1. The input must be greater than or equal to zero.
//2. The input must not be greater than 3999.
//3. The input must contain only numbers.
const checkUserInput = () => {
  //used to check whether the input is valid or not
  const input = parseInt(userInput.value);
  if (input <= 0) {
    //1.
    result.style.background = "#EE4E4E";
    result.style.fontSize = "32px";
    result.innerText = "Please enter a number greater than or equal to 1.";
  } else if (input > 3999) {
    //2.
    result.style.background = "#EE4E4E";
    result.style.fontSize = "32px";
    result.innerText = "Please enter a number less than or equal to 3999.";
  } else if (input >= 1 && input <= 3999) {
    romanToInteger(input);
  } else {
    //3.
    result.style.background = "#EE4E4E";
    result.style.fontSize = "32px";
    result.innerText = "Please enter a valid number";
  }
};

const romanToInteger = (input) => {
  let convertedString = ""; //initialized an empty string so that the roman numerals could be concatenated.
  for (let num = 0; num < reference.length; num++) {
    //traversing through the reference array.
    while (input >= reference[num][1]) {
      //checking whether the input is greater than the particular reference array equivalent.
      input -= reference[num][1]; // if the while condition satisfies then the the value from the reference array is reduced from input.
      convertedString += reference[num][0]; //the equivalent of the roman numeral to the reduced value is added to the string.
    }
  }
  result.style.background = "#6FDCE3";
  result.style.fontSize = "48px";
  result.innerText = convertedString;
};

convertBtn.addEventListener("click", checkUserInput); //the program is executed on clicking the convert button.
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    // the program is also executed on pressing down the enter key.
    e.preventDefault();
    checkUserInput();
  }
});
