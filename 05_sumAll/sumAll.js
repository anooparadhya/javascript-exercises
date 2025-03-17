const sumAll = function(firstNumber, secondNumber) {

    if(!(Number.isInteger(firstNumber) && Number.isInteger(secondNumber)))
    {
        return "ERROR";
    }
    if(firstNumber < 0 || secondNumber < 0)
    {
        return "ERROR";
    }
    let temp;
    if(firstNumber > secondNumber)
    {
        temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp;
    }
    let sum = 0;
    for(let i = firstNumber; i <= secondNumber; i++)
    {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
