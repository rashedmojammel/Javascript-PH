/* 
 Divisible by 4: A year is a leap year if it is divisible by 4 (e.g., 2024, 2028).
Century Rule Exception: If the year is divisible by 100, it is not a leap year (e.g., 1700, 1800, 1900).
400 Rule Exception: If the century year is divisible by 400, it is a leap year (e.g., 1600, 2000, 2400). 

*/

function isleapYear(year){

    if(year % 100 !== 0 && year % 4 === 0)
    {
        return true;
    }
    else if(year % 400 === 0 && year % 4 === 0 )
    {

        return true;
    }
    else
    {
        return false;
    }

}

const isleap = isleapYear(2028);
console.log(isleap);
const isleap1= isleapYear(2029);
console.log(isleap1);
const isleap2= isleapYear(2030);
console.log(isleap2);

const isleap3 = isleapYear (2032);
console.log(isleap3);
