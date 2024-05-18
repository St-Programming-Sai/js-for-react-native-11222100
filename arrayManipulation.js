// Task One
// Function That Squares an item if the item is an even number else the item is tripled.
function processArray(arr){
    return arr.map((item)=>{
        return (item % 2 === 0) ? (item ** 2) : (item * 3);
    });
}


// Task Two
// Function that capitalises the entire string if the proccessed array's item is an even number and turns it to lower canse if the proccessed array's item is not.
function formatArrayStrings(stringArr, numberArr) {
    return stringArr.map((stringItem, i) => {
        return (numberArr[i] % 2 === 0) ? stringItem.toUpperCase() : stringItem.toLowerCase();
    });
}


export { processArray, formatArrayStrings };

