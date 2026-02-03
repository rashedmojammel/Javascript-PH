
const phones = [

    {name : "Samsung", price : 12000, color :"Black" , Storage : 512},
    {name : "Samsung", price : 12000, color :"Black" , Storage : 112},
    {name : "Samsung", price : 12000, color :"Black" , Storage : 12},
    {name : "Samsung", price : 12000, color :"Black" , Storage : 312},
    {name : "Iphone", price : 140000, color :"Black"},
    {name : "oppo", price : 13400, color :"Black"},
    {name : "Honor", price : 15500, color :"Black"}
]
const phones2 = [

    {name : "Samsung", price : 12000, color :"Black" , Storage : 512},
    {name : "Samsung", price : 12000, color :"Black" , Storage : 112},
    {name : "Samsung", price : 12000, color :"Black" , Storage : 12},
    {name : "Samsung", price : 12000, color :"Black" , Storage : 312},
    {name : "Iphone", price : 140000, color :"Black"},
    {name : "oppo", price : 13400, color :"Black"},
    {name : "Honor", price : 15500, color :"Black"}
]
function minPhone(phones){

    let minPrice = phones[0];

    for ( const phone of phones)
    {
        if ( phone.price < minPrice.price)
        {
            minPrice = phone;
        }
        
    }
    return minPrice;
}
function maxPhone(phones){

    let maxPrice = phones[0];

    for ( const phone of phones)
    {
        if ( phone.price > maxPrice.price)
        {
            maxPrice = phone;
        }
        
    }
    return maxPrice;
}


// function maxPhone(phones2){

//     let maxPrice = phones2[0];

//     for ( const phones of phones2)
//     {
//         if ( phones.price > maxPrice.price)
//         {
//             maxPrice = phones;
//         }
        
//     }
//     return maxPrice;
// }



const minPrice = minPhone(phones);
const maxPrice = maxPhone(phones);
console.log(minPrice);
console.log(maxPrice);


