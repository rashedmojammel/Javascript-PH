function oddaverage(numbers){
    const odd = [];

    for(number of numbers)
    {
        
        if(number % 2 !==0 )
        {
            odd.push(number);
        }
       
    }
     console.log(odd);

      let sum = 0;
    for (const number of odd) {
        sum += number;
    }
     console.log(sum);
    const arrlenth = odd.length;
    const avg = sum / arrlenth;
    console.log(avg);
    
}

const numbers = [1,2,3,4,5,6,7,8,9,10];
oddaverage(numbers);

