
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
  counterValue+=val;
  if (counterValue >= 0){
    counterValueEl.style.color ='black'
  }else{
    counterValueEl.style.color = 'red'
  }
}

const subtractCounter = () => {
  const val = parseInt(document.querySelector('input.valueInputField').value, 10);
  counterValue-=val;
  //if I want to change the color when it's negative
  if (counterValue >= 0){
    counterValueEl.style.color ='black'
  }else{
    counterValueEl.style.color = 'red'
  }
}

counterButtonSubtract.addEventListener('click', (e) => {
  subtractCounter()
  updateCounterView()
})

counterButtonAdd.addEventListener('click', (e) => {
  addToCounter()
  updateCounterView()

})

//console.log (val)
