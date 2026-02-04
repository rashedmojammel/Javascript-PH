//Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];


function lowest( heights ){

    let minNum = heights2[0];

    for( const heights of heights2){
        if(minNum.length > heights.length)
        {
                minNum = heights;
        }
    }
    return minNum;
}

const minimumHeights = lowest (heights2);
console.log("Minimum height is ",minimumHeights);
