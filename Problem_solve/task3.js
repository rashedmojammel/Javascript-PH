//Your task is to calculate the total budget required to buy electronics:


const gadets = [
    laptop = 35000,
    tablet = 15000,
    mobile = 20000,

]

function totalBudget( gadets )
{
    let sum = 0;
    for(gadet of gadets){

        sum = sum + gadet;
    }
    return sum;

}
const budget = totalBudget(gadets);
console.log("Total budget is ",budget);