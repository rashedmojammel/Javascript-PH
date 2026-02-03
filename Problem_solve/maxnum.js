function maxNum (numbers)
{
    let max = numbers [0];
    for( const num of numbers)
    {
        if ( num > max)
        {
            max = num;
        }
    }
    return max;

}

function minnum (numbers2)
{
    let min = numbers[0];
    for( const num of numbers2)
    {
        if ( num < min )
        {
            min = num;
        }
    }
    return min;

}

const numbers = [32,65,3,13,56,78,21,22,90];
const numbers2= [32,65,3,13,56,78,21,22,90];
const max = maxNum(numbers);
const min = minnum(numbers2);
console.log("Max number is", max);
console.log("min number is ", min);
