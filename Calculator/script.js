function valuebtn(e) {
  calculator_form.screen.value += e.value;
  console.log(screen);   
}

function Clear(){
  calculator_form.screen.value=null;
}

function calculate(){
  calculator_form.screen.value=eval(calculator_form.screen.value)
}