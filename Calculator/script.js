// Function to push user data into main input tag 
function valuebtn(e) {
  calculator_form.screen.value += e.value;
  console.log("hello");
  console.log(calculator_form.screen.value);
}
// Function to clear the input
function Clear() {
  calculator_form.screen.value = null;
}
//Targeting the input
let dta = document.getElementById("input_data");

//Function that check the input.value id empty or not . if empty display alert msg. otherwise execute the further code
function calculate() {
  if (!dta.value) {
    alert("Please enter some data");
    calculator_form.screen.value = null;
  } else {
    calculator_form.screen.value = eval(calculator_form.screen.value);
  }
}
