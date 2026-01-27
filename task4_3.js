/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

let num = 1;

while( num < 100){

    console.log("Sqaure ", num);

    if( num / 4 === 1 || num / 9 === 1 || num / 16=== 1)
    {
        console.log("Sqaure ", num);
        break;
    }
    
    num++;

}