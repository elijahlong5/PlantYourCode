/**
 * Complete the function plantsDying below. It must return
 * the number of days until plants will no longer die from infestation.
 * If a plant has a higher infestation number than the plant to it's left, it dies.
 *
 * For example: If infestation levels for each plant in the row are [3, 7, 2, 9, 1, 6, 4] 
 * then, on the first day, plants infested at levels 7, 9, and 6 will die 
 * leaving [3, 2, 1, 4]. On the second day 4 will die leaving [3, 2, 1]
 * with no more plants that will die. 
 * The answer is 2 days.
 * 
 * @param {array} infestedPlants - Array of the infestation levels of the row of plants
 * @return {number} - Number representing the number of days until plants no longer die
 */

function plantsDying(infestedPlants) {
    /* Enter your solution here! */
    console.group();
    console.log(infestedPlants);
    let days = 0;
    let infesting = true;
    while(infesting) {
        infesting = false;
        for (let i = infestedPlants.length-1; i > 0; i--){
            let p = infestedPlants[i];
            let leftOfP = infestedPlants[i-1];
            console.log('p, left of p: ', p,', ', leftOfP);
            if (leftOfP < p){
                if (!infesting){
                    days++; // only increment the day the first time.
                }
                infesting = true; // ensure true.
                // remove this plant. It dies.
                infestedPlants.splice(i, 1);
            }
        }
    }
    console.log("days: ", days);
    console.groupEnd();
    return days;
}

console.log("correct: ", plantsDying([1, 2, 3, 4, 5, 6, 7]) === 1);
console.log("correct: ", plantsDying([7, 6, 5, 4, 3, 2, 1]) === 0);
console.log("correct: ", plantsDying([7, 6, 4, 5, 3, 2, 1]) === 1);
console.log("correct: ", plantsDying([1, 7, 6, 5, 4, 3, 2]) === 6);
console.log("correct: ", plantsDying([3, 7, 2, 9, 1, 6, 4]) === 2);




