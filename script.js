
const input = document.getElementById("input");
const button = document.getElementById("button1");

input.style.border = "2px solid rgb(118, 118, 118)"

function setInputValue() {
  const sel=document.getElementById('select').selectedIndex;
  const options=document.getElementById('select').options;
  input.value = options[sel].text;
}
function handleClick() {
  const inputText = input.value;
  if(!!inputText.trim()){
  const sel=document.getElementById('select').selectedIndex;
  const options=document.getElementById('select').options;
  options[sel].text = inputText;
  }
  else{
    input.style.border = "2px solid red";
  }
}
function resetBorderStyle(){
  input.style.border = "2px solid rgb(118, 118, 118)"
}


