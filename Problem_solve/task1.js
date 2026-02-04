//Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];

function lowest( heights ){

    let minNum = heights2[0];

    for( const heights of heights2){
        if(minNum > heights)
        {
                minNum = heights;
        }
    }
    return minNum;
}

const minimumHeights = lowest (heights2);
console.log("Minimum height is ",minimumHeights);

