const biriyanikhor = ['abul', 'kabul','gabul','abul','chabul'];


function noduplicate (arr){
    const uniqueArr = [];

    for(const item of arr )
    {
        if( uniqueArr.includes(item) === false)
        {
            uniqueArr.push(item);
        }
    }
    return uniqueArr;

}

const uniquearray = noduplicate(biriyanikhor);

console.log(uniquearray);
