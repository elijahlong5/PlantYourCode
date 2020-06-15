// let plant = {
//     gardenLocation:[1,1],
//     needsWater: true,
// }

p = [
    {gardenLocation: [1, 1], needsWater: true},
    {gardenLocation: [2, 1], needsWater: true},
    {gardenLocation: [3, 1], needsWater: true},
    {gardenLocation: [4, 2], needsWater: false},
    {gardenLocation: [5, 1], needsWater: true},
]

function whereToWater(plantsArray){
    const filtered = plantsArray.filter(x => x['needsWater']);
    let a = [];
    for (let i = 0; i < filtered.length; i++){
        a.push(filtered[i]['gardenLocation']);
    }
    return a;
}

console.log(whereToWater(p));
