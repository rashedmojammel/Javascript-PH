// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.


const book = ['avengers','marvel','c++','python'];

const isavailable = book.includes('c++');
if(isavailable)
{
    console.log("Yes this book is available");
}
else{
    console.log("Yes this book is not available");
}