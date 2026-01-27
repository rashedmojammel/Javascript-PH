

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

let sum = 0;
for ( let i = 91; i<129 ; i++)
{
    sum = sum + i;
}
console.log("Sum of 91 to 129 is :",sum);

console.log("Even numbers");

for(let n=51 ; n<85 ; n++){

    if(n%2 === 0)
    {
        console.log(n);
    }
}