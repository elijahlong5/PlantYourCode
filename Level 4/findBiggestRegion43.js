/**
 * Find and return the single largest region of mINT plants in a 2D array representing
 * a garden plot. The function can accept any size of 2D array and solves for
 * a value of "m" when finding mINT plants.
 *
 * Someone wants to buy your plants!
 * The catch is, the buyer only wants the largest region of mINT in your garden,
 * which is mixed in a uniform grid with CHARd.
 * Figure out how many plants the buyer will buy.

 A region is a group of contiguously adjacent plants of a single type.
 Plants are considered adjacent if they are next to each other
 horizontally, vertically, or diagonally.

 For example: if you have the following garden where m is mINT
 and c is CHARd you will sell the buyer 5 mINT plants.

 m m c c m
 c m m c m
 c c m c c
 m c c c m
 c c c m m
 *
 * @param {array} garden - 2D array of a mixed garden where m is mINT and c is CHARd
 * @return {number} - Number representing the largest region of mINT plants
 */

function findBiggestRegion(garden) {
    /* Enter your solution here! */
    let usedCoords = []; // will either be current search or failed paths.
    let maxPath = 0;
    let target = 'm';

    // Function determining if coord has been used.
    const includesCoords = (coord) => {
        for (let i = 0; i < usedCoords.length; i++){
            if (usedCoords[i][0] === coord[0] && usedCoords[i][1] === coord[1]){
                return true;
            }
        }
        return false;
    };

    // Function to recursively hunt the surrounding coordinates.
    let currentPathCoords = 0;
    const checkPath = (r, c) => {
        // Base case: coordinates have already been used.
        if(includesCoords([r,c])){
            return;
        }
        usedCoords.push([r,c]);

        if (garden[r][c] === target){
            currentPathCoords++;
            // check surrounding cells
            // check r-1, c
            if (r){
                checkPath(r-1, c);
            }
            // check r-1, c-1
            if(r && c){
                checkPath(r-1, c-1);
            }
            // check r-1, c+1
            if(r && c < garden[r].length-1){
                checkPath(r-1, c+1);
            }
            // check r, c-1
            if(c){
                checkPath(r, c-1);
            }
            // check r, c+1
            if(c < garden[r].length-1){
                checkPath(r, c+1);
            }
            // check r+1, c-1
            if(r < garden.length-1 && c){
                checkPath(r+1,c-1);
            }
            // check r+1, c
            if(r < garden.length-1){
                checkPath(r+1,c);
            }
            // check r+1, c+1
            if(r <garden.length-1 && c < garden[r].length-1){
                checkPath(r+1,c+1);
            }



        }
    }

    for (let r = 0; r < garden.length; r++){
        for (let c = 0; c < garden[r].length; c++) {
            currentPathCoords = 0;
            checkPath(r, c);
            if(currentPathCoords > maxPath){
                maxPath = currentPathCoords;
            }
        }
    }
    console.log('max path is: ', maxPath);
    return maxPath;
}

let g = [
    ["m", "m", "c", "c", "m"],
    ["c", "m", "m", "c", "m"],
    ["c", "c", "m", "c", "c"],
    ["m", "c", "c", "c", "m"],
    ["c", "c", "c", "m", "m"],
]

let g2 = [
    ["m", "m"],
    ["m", "m"],
]
let g3 = [
    ["c", "c", "c", "m", "c", "c", "m", "m"],
    ["c", "m", "c", "c", "m", "c", "c", "c"],
    ["c", "m", "m", "c", "m", "m", "c", "m"],
    ["m", "c", "m", "c", "m", "m", "c", "m"],
]
let g4 = [
    ["a", "b", "c"],
    ["e", "m", "z"],
]

let ga =findBiggestRegion(g);
let g2a =findBiggestRegion(g2);
let g3a =findBiggestRegion(g3);
let g4a = findBiggestRegion(g4);


console.log(ga === 5);
console.log(g2a === 4);
