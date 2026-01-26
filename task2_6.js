/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


let farePrice = 800;
let age = 9;
let name = "Rtudent";

if(age < 10)
{
    console.log("You are ticket price is free");

}
else if(name === "student")
{
    farePrice = farePrice - (farePrice * 50) / 100;
    console.log("Fare Price is: " + farePrice + " tk");
}

else if (age >= 60)
{
    farePrice = farePrice - (farePrice * 15) / 100;
    console.log("Fare Price is: " + farePrice + " tk");

}
else{
    console.log("Regular price :" + farePrice);
}