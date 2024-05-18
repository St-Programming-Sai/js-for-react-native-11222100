import { processArray, formatArrayStrings } from "./arrayManipulation.js";

// Task Three
// Takes an array of names and the array of modified names from Task Two. Returns an array of objects, each containing originalName, modifiedName, and id (auto-incremented starting from 1).
let userId = 1;
function createUserProfiles(namesArray, modifiedNamesArray){
    let userProfile = [];
    for (let i = 0; i < namesArray.length; i++){
        userProfile.push(
            {
                userid: userId++,
                originalName: namesArray[i],
                modifiedName: modifiedNamesArray[i]
            }
        )
    }
    return  userProfile;
}



const namesArray = ["John", "Max", "Mary", "Abigail"];
const modifiedNamesArray = formatArrayStrings(namesArray, processArray([1, 2, 3, 4]));
const userProfiles = createUserProfiles(namesArray, modifiedNamesArray);
console.log(userProfiles);