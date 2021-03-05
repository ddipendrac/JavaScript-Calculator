'use strict'

const one = document.getElementById('btn-1')
const two = document.getElementById('btn-2')
const three = document.getElementById('btn-3')
const four = document.getElementById('btn-4')
const five = document.getElementById('btn-5')
const six = document.getElementById('btn-6')
const seven = document.getElementById('btn-7')
const eight = document.getElementById('btn-8')
const nine = document.getElementById('btn-9')
const zero = document.getElementById('btn-0')
const point = document.getElementById('btn-point')
const divide = document.getElementById('btn-divide')
const multiply = document.getElementById('btn-multiply')
const add = document.getElementById('btn-add')
const subtract = document.getElementById('btn-subtract')
const equate = document.getElementById('btn-equal')
const equation = document.getElementById('equation')
const finalResult = document.getElementById('result')
const allClear = document.getElementById('btn-ac')
const del = document.getElementById('btn-del')

let nums = ['', '']  // Two numbers in string
let x = 0;
let operator;
let finalEquation = '';   // Equation which appears finally at top of the display
let equationString = '';  // Equation which appears initially at bottom of the display


// Numbers and points: Add Event Listner to the each buttons
one.addEventListener('click', function() {
  nums[x] += 1;
  equationString += 1
  dryMethodForNumber()
})
two.addEventListener('click', function() {
  nums[x] += 2;
  equationString += 2
  dryMethodForNumber()
})
three.addEventListener('click', function() {
  nums[x] += 3;
  equationString += 3
  dryMethodForNumber()
})
four.addEventListener('click', function() {
  nums[x] += 4;
  equationString += 4
  dryMethodForNumber()
})
five.addEventListener('click', function() {
  nums[x] += 5;
  equationString += 5
  dryMethodForNumber()
})
six.addEventListener('click', function() {
  nums[x] += 6;
  equationString += 6
  dryMethodForNumber()
})
seven.addEventListener('click', function() {
  nums[x] += 7;
  equationString += 7
  dryMethodForNumber()
})
eight.addEventListener('click', function() {
  nums[x] += 8;
  equationString += 8
  dryMethodForNumber()
})
nine.addEventListener('click', function() {
  nums[x] += 9;
  equationString += 9
  dryMethodForNumber()
})
zero.addEventListener('click', function() {
  nums[x] += 0;
  equationString += 0
  dryMethodForNumber()
})
point.addEventListener('click', function() {
  if(nums[x] != '') {
    nums[x] += '.';
    point.disabled = true;
    equationString += '.';
    dryMethodForNumber()
  }
})

// Select operator : Add Event Listner to operator buttons
add.addEventListener('click',function(){
  operator = '+';
  equationString += '+';
  dryMethodForOperator()
})
subtract.addEventListener('click',function(){
  operator = '-';
  equationString += '-';
  dryMethodForOperator()
})
divide.addEventListener('click',function(){
  operator = '÷';
  equationString += '÷'
  dryMethodForOperator()
})
multiply.addEventListener('click',function(){
  operator = '×';
  equationString += '×'
  dryMethodForOperator()
})


// Equate : Solve the problem 
equate.addEventListener('click', function() {
  let num1 = Number(nums[0])
  let num2 = Number(nums[1])
  let result;

  if(operator === '+') {
    result = num1 + num2;
  }
  if(operator === '-') {
    result = num1 - num2;
  }
  if(operator === '×') {
    result = num1 * num2;
  }
  if(operator === '÷') {
    result = num1 / num2;
  }

  finalEquation = nums[0] + operator + nums[1]
  equation.innerHTML = finalEquation;
  equationString = result
  finalResult.innerHTML = result
  disableNumButtons()
  nums[0] = result;
  nums[1] = '';
  console.log(nums[0]);
  x = 1;
  b = 1;

  enableOperator()
})


// Clear all : When AC Button gets pressed
allClear.addEventListener('click', function() {
  nums = ['', ''];
  x = 0;
  enableNumButtons();
  equationString = ['']
  finalEquation = '';
  finalResult.innerHTML = '';
  equation.innerHTML = '';
  enableOperator()
})

// Delete : When Del button gets pressed
let b = 1; // A variable
del.addEventListener('click', function(){
  let deleted = nums[x].substring(0, nums[x].length-b)
  equationString = deleted
  finalResult.innerHTML = deleted
  nums[x] = deleted;
})


// Disable buttons
function disableNumButtons() {
  one.disabled = true;
  two.disabled = true;
  three.disabled = true;
  four.disabled = true;
  five.disabled = true;
  six.disabled = true;
  seven.disabled = true;
  eight.disabled = true;
  nine.disabled = true; 
  zero.disabled = true; 
  point.disabled = true; 
}

// Enable Buttons
function enableNumButtons() {
  one.disabled = false;
  two.disabled = false;
  three.disabled = false;
  four.disabled = false;
  five.disabled = false;
  six.disabled = false;
  seven.disabled = false;
  eight.disabled = false;
  nine.disabled = false; 
  zero.disabled = false; 
  point.disabled = false; 
}
// DRY Method: Dont Repeat Yourself; The repeated terms
function dryMethodForNumber() {
  finalResult.innerHTML = equationString;
  b = 1;
}
function dryMethodForOperator() {
  finalResult.innerHTML = equationString;
  point.disabled = false;

  if(x === 0) {
    x++;
  }
  enableNumButtons()
  b = 1;
  disableOperator()
}



function enableOperator() {
  add.disabled = false;
  subtract.disabled = false;
  multiply.disabled = false;
  divide.disabled = false;
}
function disableOperator() {
  add.disabled = true;
  subtract.disabled = true;
  multiply.disabled = true;
  divide.disabled = true;
}