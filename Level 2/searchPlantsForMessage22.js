/**
 * Converts a message from Plant-Latin.
 * @param {string} message - The Plant-Latin message to be translated.
 * @return {string} - Translated message.
 */

function translate(message) {
    const vowelReplacements = {
        tiva: "a",
        llia: "e",
        mus: "i",
        phylum: "o",
        rea: "u"
    };
    // for (let k in Object.keys(vowelReplacements)){
    //     let sub = Object.keys(vowelReplacements)[k];
    //     console.log(k);
    //     if (message.includes(k)){
    //         console.log(k);
    //     }
    // }
}

/**
 * The Plant class has an instance property called message
 * which is a string. The Plant's message is in Plant-Latin.
 * Write a function that takes in an array of Plants, a message
 * in human language, and returns all the Plants whose Plant-Latin
 * matches the message.
 *
 * @param {array} plants - Array of Plants to be searched
 * @param {string} message - The message in human language to search for
 * @return {array} - Array of Plants whose Plant-Latin translates to message
 */

function searchPlantsForMessage(plants, message) {
    let r = plants.filter(p => p.message === translate(message));
    console.log(r);
    return r;
}

console.log(translate("himus"));
