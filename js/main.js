
const counterButtonAdd = document.querySelector('#add');
const counterButtonSubtract = document.querySelector('#subtract');
const counterValueEl = document.querySelector('#count');

let counterValue = 0;



//Functions

const updateCounterView = () => {
  counterValueEl.textContent = counterValue
}

const addToCounter = () => {
  const val = parseInt(document.querySelector('input.valueInputField').value, 10);
  counterValue+=val
}

const subtractCounter = () => {
  const val = parseInt(document.querySelector('input.valueInputField').value, 10);
  counterValue-=val
}

counterButtonSubtract.addEventListener('click', (e) => {
  subtractCounter()
  updateCounterView()
})

counterButtonAdd.addEventListener('click', (e) => {
  addToCounter()
  updateCounterView()
  //pull the value of the valueInputField
  //then do math
})

//console.log (val)
