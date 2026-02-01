//1 mile = 1.609344 km

function mileTokilo(miles){

    const convert = miles * 1.609344;
    return convert;

}

const mile = mileTokilo(5);
console.log( mile );