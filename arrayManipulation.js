// Task One
// Function That Squares an item if the item is an even number else the item is tripled.
function processArray(arr){
    return arr.map((item)=>{
        return (item % 2 === 0) ? (item ** 2) : (item * 3);
    });
}


// Task Two
function formatArrayStrings(stringArr, numberArr) {
    return stringArr.map((stringItem, i) => {
        return (numberArr[i] % 2 === 0) ? stringItem.toUpperCase() : stringItem.toLowerCase();
    });
}



console.log(formatArrayStrings(["boy", 'girl', "house", 'chair'], processArray([1, 2, 3, 4])))
