
/**
 * Below is an example of the input plantData. Actual values may vary.
 *
 * {
 *  "tomato": {
 *    "nutrients-required": ['nitrogen', 'calcium', 'magnesium'],
 *    "grams-food-per-plant": 3, // amount of plant food needed in grams per plant
 *    "current-count": 6 // amount of plants currently in your garden
 *  },
 *    "blueberries": {
 *    "nutrients-required": ['nitrogen', 'phosphorus', 'potassium', 'sulfur', 'boron'],
 *    "grams-food-per-plant": 2,
 *    "current-count": 4
 *  },
 *    "chard": {
 *    "nutrients-required": ['phosphorus', 'potassium', 'calcium', 'magnesium', 'cobalt', 'iron'],
 *    "grams-food-per-plant": 2,
 *    "current-count": 8
 *  }
 * }
 */

var BasePlantFood = class BasePlantFood {
    constructor() {
        this.nutrients = ["nitrogen", "phosphorus", "potassium", "calcium"];
    }
    getAmountNeeded(count, grams) {
        return count * grams;
    }
}

/**
 * Create a class CustomPlantFood that extends the BasePlantFood class.
 * It should initialize with its additional nutrients required.
 */

var CustomPlantFood = class CustomPlantFood extends BasePlantFood {
    /* Enter your solution here! */
    constructor(additionalNutrients) {
        super();
        this.addNutrients(additionalNutrients);
    }
    /**
     * Write a function that adds nutrients to the base plant food.
     * Any nutrients already included in the base plant food should
     * not be added twice.
     *
     * @param {array} nutrients - array of strings of nutrient names
     */

    addNutrients(nutrients) {
        /* Enter your solution here! */
        for (let i in nutrients){
            let nutrient = nutrients[i];
            if (!this.nutrients.includes(nutrient)){
                this.nutrients.push(nutrient);
            }
        }
    }
}

/**
 *
 * Write a function that determines the amount of each custom
 * plant food you'll need based off the provided plantData object.
 * For each type of plant food, create a new instance of the
 * CustomPlantFood class.
 *
 * @return {array} - Array of objects {food: CustomPlantFood, gramsNeeded: number}
 */

function determineCustomPlantFoods(plantData) {
    /* Enter your solution here! */
    let plantsDinner = [];
    for (let p in plantData){
        let curP = plantData[p];
        // create instance of CPF
        let curDinner = new CustomPlantFood(curP['nutrients-required']);
        // add current object to plantsDinner
        plantsDinner.push({
            'food': curDinner, //The cpf object
            // method used from base class.
            'gramsNeeded': curDinner.getAmountNeeded(curP['grams-food-per-plant'], curP['current-count']),
        });
    }
    console.log('Plants Dinner:')
    console.log(plantsDinner);
    return plantsDinner;
}

console.log(determineCustomPlantFoods({
    'blubes': {
        'nutrients-required': ["nitrogen", "phosphorus", "potassium", "calcium", "magnesium"],
        'grams-food-per-plant': 2,
        'current-count': 4
    }
}))
