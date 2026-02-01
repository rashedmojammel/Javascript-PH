
//we know 12 inch to 1 feet

function InchTofeet(height){
    const feet = height / 12 ;
    const feetNum = parseInt(feet);
    const Inch = height % 12;

    
    const ConversionResult = feetNum + (' ft ') + Inch + (' inch.');

    return ConversionResult;
}

const rashed = InchTofeet(70);
console.log(rashed);