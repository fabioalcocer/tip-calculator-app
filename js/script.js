const billInput = document.querySelector('.options__input--bill');
const peopleInput = document.querySelector('.options__input--people');
const tipBtns = document.querySelectorAll('.options__tip-btn');
const customTipInput = document.querySelector('.options__input--tip');

const tipResult = document.querySelector('.results__amount--tip');
const totalResult = document.querySelector('.results__amount--total');
const resetBtn = document.querySelector('.results__reset-btn');

const errorPeople = document.querySelector('.options__error--people');

let tip = 0
let bill = 0
let people = 0

const handleOnEnter = (e, func) => {
  if (e.code === 'Enter') {
    func()
  }
};

const handleBillInput = (e) => {
  if (billInput.validity.valid) {
    bill = parseFloat(billInput.value);
    calculateResults();
  }
};

const handleTipBtnSelect = (e) => {
  deselectTipBtns();
  e.target.classList.add('selected');
  customTipInput.value = '';
  tip = parseFloat(e.target.dataset.tipPercent);
  calculateResults();
};

const deselectTipBtns = () => {
  tipBtns.forEach((btn) => {
    btn.classList.remove('selected');
  });
};

const setCustomTip = () => {
  if (customTipInput.validity.valid) {
    tip = parseFloat(customTipInput.valueAsNumber / 100) || 0;
    calculateResults();
  }
};

const handlePeopleInput = (e) => {
  if (peopleInput.validity.valid && peopleInput.value > 0) {
    people = parseInt(peopleInput.value);
    peopleInput.classList.remove('error');
    errorPeople.classList.remove('visible');
    calculateResults();
  } else {
    peopleInput.classList.add('error');
    errorPeople.classList.add('visible');
  }
};

const calculateResults = () => {
  if (people > 0) {
    let tipPerPerson = parseFloat((bill * tip) / people).toFixed(2);
    let totalPerPerson = parseFloat((bill * (1 + tip)) / people).toFixed(2);
    tipResult.innerText = `$${tipPerPerson}`;
    totalResult.innerText = `$${totalPerPerson}`;
    resetBtn.disabled = false;
  }
};

const handleResetBtn = () => {
  resetResults();
  resetInputs();
  resetValues();
  peopleInput.classList.remove('error');
  errorPeople.classList.remove('visible');
  resetBtn.disabled = true;
};

const resetResults = () => {
  tipResult.innerText = '$0.00';
  totalResult.innerText = '$0.00';
};

const resetInputs = () => {
  billInput.value = '';
  deselectTipBtns();
  customTipInput.value = '';
  peopleInput.value = '';
};

const resetValues = () => {
  bill = 0;
  people = 0;
  tip = 0;
};


// event listeners
tipBtns.forEach((btn) => {
  btn.addEventListener('click', handleTipBtnSelect);
});

billInput.addEventListener('keyup', (e) => handleOnEnter(e, handleBillInput));
billInput.addEventListener('focusout', handleBillInput);

customTipInput.addEventListener('focus', deselectTipBtns);
customTipInput.addEventListener('keyup', (e) => handleOnEnter(e, setCustomTip));
customTipInput.addEventListener('focusout', setCustomTip);

peopleInput.addEventListener('keyup', (e) => handleOnEnter(e, handlePeopleInput));
peopleInput.addEventListener('focusout', handlePeopleInput);

resetBtn.addEventListener('click', handleResetBtn);