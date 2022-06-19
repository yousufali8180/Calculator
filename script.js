console.log("Seleect Opion: \n1. and \n2. Subtract \n3. Multiple \n4. Divide");

var num1 = prompt("Enter First Number");
var num2 = prompt("Enter Second Number");
var option = prompt("Choose an operation");
var result = null;

num1 = parseInt(num1);
num2 = parseInt(num2);
option = parseInt(option);

var num1Con = isNaN(num1);
var num2Con = isNaN(num2);
var optionCon = isNaN(option);

if(num1Con || num2Con || optionCon){
    console.log("Invalid Input");
}else{
    switch(option){
        case 1:
            result = num1 + num2;
            break;
        case 2:
            result = num1 - num2;
            break;
        case 3:
            result = num1 * num2;
            break;
        case 4:
            result = num1 / num2;
        default:
            break;
    }
    if(result == null){
        console.log("No Result");
    }else{
        console.log("Result :" + result);
    }
}