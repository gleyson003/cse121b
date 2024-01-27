/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
   let addNumber1 = Number(document.querySelector('#add1').value);
   let addNumber2 = Number(document.querySelector('#add2').value);
  
   return document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers)


/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
   
    return document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers)


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {return number1 * number2};

function multiplyNumbers() {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
   
    return document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
const division = (number1, number2) => {return number1 / number2}

function divideNumbers() {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);

    return document.querySelector('#quotient').value = division(divideNumber1, divideNumber2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers)


/* Decision Structure */
function total() {
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const isMember = document.getElementById('member').checked;

    const discount = isMember ? 0.2 : 0;
    const totalWithDiscount = subtotal * (1 - discount);

    const totalElement = document.getElementById('total');
    totalElement.textContent = `$ ${totalWithDiscount.toFixed(2)}`
}

document.getElementById('getTotal').addEventListener('click', total);
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById('array').innerHTML = `${numbersArray}`

/* Output Odds Only Array */
const oddArray = numbersArray.filter(number => number % 2 === 1);
document.getElementById('odds').innerHTML = oddArray

/* Output Evens Only Array */
const evenArray = numbersArray.filter(number => number % 2 === 0);
document.getElementById('evens').innerHTML = evenArray

/* Output Sum of Org. Array */
const reduceSum = numbersArray.reduce((sum, number) => sum + number);
document.getElementById('sumOfArray').innerHTML = reduceSum 

/* Output Multiplied by 2 Array */
const ArrayMultipliedBy2 = numbersArray.map(number => number * 2);
document.getElementById('multiplied').innerHTML = ArrayMultipliedBy2

/* Output Sum of Multiplied by 2 Array */
const reduceMap = ArrayMultipliedBy2.reduce((sum, number) => sum + number);
document.getElementById('sumOfMultiplied').innerHTML = reduceMap