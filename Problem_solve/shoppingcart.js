const shopping = [

    {name : 'Denim', price : 1200 , quantity :2 },
    {name : 'Pant', price : 1000 , quantity :1 },
    {name : 'Shirts', price : 500 , quantity :2 },
    {name : 'Tshirt', price : 300 , quantity :1 }
]

function shoppingcart(shopping)
{
    let price = 0;
    for ( const cart of shopping)
{
    price = price + (cart.price * cart.quantity);

    
}
return price;

}
const price = shoppingcart(shopping);
console.log("total price is ", price);
