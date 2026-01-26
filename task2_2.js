/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/


// let userName = prompt("Enter your name:");
// let weight = Number(prompt("Enter your Weight:"));
// let height = Number(prompt("Enter your Height:"));
const weight = 79;
const height = 1.78;

const BMI = weight / (height ** 2);

if(BMI < 18.5){
    console.log("you are underweight");

}
else if(BMI >=18.5 && BMI <=24.9){
    console.log("You are normal");
}
else
{
    console.log("you are overwight");
}