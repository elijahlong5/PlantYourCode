/**
 * Determine the locations in your garden layout where a given
 * plant was planted last year based on API data. The garden layout
 * is represented as a 2D array of Plants. Plants are represented
 * as strings by their name.
 *
 * Complete the following function that takes a plant's name,
 * garden layout API endpoint data that retrieves a 2D array of plant names,
 * and returns an array of that plant's locations {row: number, col: number}
 * from last year's garden layout.
 *
 * @param {string} plantName - The name of plant to find in garden layout
 * @param {string} endpointUrl -accept a URL endpoint to retrieve data from.
 *        Will return JSON similar to this example endpoint:
 *        https://https://plantyourcode.com/api/previous-locations
 * @return {array} - Array of locations {row: number, col: number} for each location
 */
async function findPlantLocations(plantName, endpointUrl) {
    plantName = plantName.toLowerCase();
    let coordArr = [];
    const response = await fetch(endpointUrl)
        .then(response => {
            return response.json();
        }).then(data => {
            let str = data[Object.keys(data)[0]];
            while (str.includes("'")){
                str = str.replace("'",'"');
            }
            let plantArr = JSON.parse(str);
            console.log("plant Array: ");
            console.log(plantArr);
            for (let r = 0; r < plantArr.length; r++) {
                // for each row
                for (let c = 0; c < plantArr[r].length; c++) {
                    // for each column
                    // if plant matches
                    if (plantName === plantArr[r][c]) {
                        // Add the current coordinate to the arr
                        console.log('pushing ' + plantName);

                        coordArr.push({
                            row: r,
                            col: c,
                        });
                    }
                }
            }
            console.log(coordArr);
            return coordArr;
        });
    return response;
}
// findPlantLocations('Kale','https://https://plantyourcode.com/api/previous-locations')
function howToJsonify() {
    let str = "[['tomato', 'tomato', 'cucumber'],['tomato', 'tomato', 'cucumber'],['green-peppers', 'green-peppers', 'cucumber'],['red-peppers', 'red-peppers', 'cucumber'],['cilantro', 'kale', 'kale'],['cilantro', 'kale', 'kale']]";

    while (str.includes("'")) {
        str = str.replace("'",'"');
    }
    let newOne = JSON.parse(str);
    console.log(newOne);
}
// howToJsonify();
