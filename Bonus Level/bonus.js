/**
 * Complete the function daysToSavePlants below. It should return the least number of
 * days possible to save a fixed number of potted plants when starting with a certain
 * number of garden shovels and helpers which can be increased by spending some of the
 * produced potted plants.
 *
 * @param {number} plantsToSave - Target number of potted plants to bring inside
 * @param {number} shovels - Starting amount of shovels
 * @param {number} helpers - Starting number of helpers
 * @param {number} plantsToBuyResources - Number of rescued plants it costs to by a shovel or employ a helper
 * @return {number} - The least number of days to save the target number of plants
 */
function daysToSavePlants(
    plantsToSave,
    shovels,
    helpers,
    plantsToBuyResources
) {
    let days = 0;
    console.log('plants to buy resources', plantsToBuyResources);
    console.log("Day:", days);

    const savePlants = (plantsToSave,
                        shovels,
                        helpers,
                        plantsToBuyResources,
                        remainingBuyingPower) => {
        let savedToday = shovels * helpers;
        plantsToSave -= savedToday;
        days++;
        // base case:
        if (plantsToSave <= 0){
            return days;
        }

        let resourceBuyingPower = Math.floor((remainingBuyingPower + savedToday) / plantsToBuyResources);
        remainingBuyingPower = (remainingBuyingPower + savedToday) % plantsToBuyResources;
        console.log("Day:", days);
        console.group();
        console.log("today's buying power",resourceBuyingPower);
        console.log('saved today:', savedToday)
        console.log('plants left to save', plantsToSave)
        console.log('helpers, shovels ',helpers,shovels);
        console.groupEnd();

        // buy resources.
        if( helpers-shovels > 0){
            let addResource = Math.min(resourceBuyingPower, helpers-shovels);
            console.log('adding shovels', shovels,' + ' ,addResource);
            shovels += addResource;
            resourceBuyingPower -= addResource;
        } else if (shovels-helpers > 0){
            let addResource = Math.min(resourceBuyingPower, shovels-helpers);
            console.log('adding helpers', helpers,' + ' , addResource);
            helpers += addResource;
            resourceBuyingPower -= addResource;
        }
        // Now, either shovels === helpers, or resource buying power is 0,
        if(resourceBuyingPower) {
            if (resourceBuyingPower%2 === 1){
                helpers += 1;
            }
            helpers += (resourceBuyingPower-1)/2;
            shovels += (resourceBuyingPower-1)/2;
        }

        return savePlants(plantsToSave,
            shovels,
            helpers,
            plantsToBuyResources,
            remainingBuyingPower);
    }
    return savePlants(plantsToSave,
        shovels,
        helpers,
        plantsToBuyResources,
        0);
}
console.log('days: ',daysToSavePlants(60, 2,1,1));
