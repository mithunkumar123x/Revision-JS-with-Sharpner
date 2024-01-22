/* Arrow Function : That's a different js syntax for creating function.
 when you use this inside arrow function that keep it context and 
 not changing in run time.



function myFunc() {
    
}

const myFunc = () => {
    
}

*/ 

function printMyName(name,age) {
    console.log(name , age);
}

printMyName('Max' , 26);

const PrintName = (abc) => {
    console.log(54);
}

PrintName();

const multiply = (String,ac ,fg ,vgkl,lm ,number) => {
    return number * 2;
}

console.log(multiply(5));

const dividend = number => number/8;

console.log(dividend(80));