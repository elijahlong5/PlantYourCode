/**
 * The Plant class
 */

var Plant = class Plant {
    /**
     * @param {number} height - height in number of inches
     * @param {string} health - string of either "below average", "average", or
     * "above average"
     */
    constructor(height, health) {
        this.height = height;
        this.health = health;
    }
}

/**
 *
 * Write a function that passes in an array of Plants and
 * orders the array from shortest Plant to tallest.
 * If two heights are the same, then order by least healthiest
 * to healthiest.
 *
 * @param {Plant[]} plants - Array of Plants
 * @return {array} - Array of Plants ordered from shortest
 * to tallest.
 */

function reorderPlants(plants) {
    console.log(plants);
    let healthStatus = {
        "below average": 0,
        "average": 1,
        "above average": 2,
    }
    return plants.sort((a,b) => {
        return (a.height === b.height) ? healthStatus[a.health] - healthStatus[b.health] : a.height - b.height;
    });
}

const plants = [
    {height: 23, health: "average"},
    {height: 3, health: "above average"},
    {height: 15, health: "average"},
    {height: 24, health: "above average"},
    {height: 4, health: "above average"},
]
const p2 = [
    {height: 3, health: "above average"},
    {height: 4, health: "below average"},
    {height: 4, health: "above average"},
    {height: 15, health: "average"},
]
console.log(reorderPlants(plants));
console.log(reorderPlants(p2));
