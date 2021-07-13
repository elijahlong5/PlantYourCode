function translatePlantLatin(message){
    let aStr = "tiva";
    let eStr = "llia";
    let iStr = "mus";
    let oStr = "phylum";
    let uStr = "rea";

    // also think I could do this with a mapping dictionary.

    let i = message.length;
    let returnStr = message;
    while (i) {
        let char = message[i-1].toLowerCase();
        let s = "";
        switch (char){
            case "a":
                s = aStr;
                break;
            case "e":
                s = eStr;
                break;
            case "i":
                s = iStr;
                break;
            case "o":
                s = oStr;
                break;
            case "u":
                s = uStr;
                break;
        }
        let start = returnStr.slice(0, i);
        let end = returnStr.slice(i, returnStr.length);
        returnStr = start + s + end;
        i--;
    }
    return returnStr;
}

// let r = translatePlantLatin("I love water!");
//
// console.log(r);
// console.log(r === "Imus lophylumvellia wativatelliar!");
//
// let r2 = translatePlantLatin("YoU");
// console.log(r2);
// console.log(r2 === "YophylumUrea");

module.exports = translatePlantLatin
