// Task One
// Function That Squares an item if the item is an even number else the item is tripled.
function transfromArray(arr){
    return arr.map((item)=>{
        return (item % 2 === 0) ? (item ** 2) : (item * 3);
    });
}




