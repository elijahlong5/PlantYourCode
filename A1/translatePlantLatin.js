function translatePlantLatin(message){
    try{
        let mapDict = {
            'a': 'tiva',
            'e': "llia",
            'i': "mus",
            'o': "phylum",
            'u': "rea",
        }
        let ans = message.split('').map(x => (x.toLowerCase() in mapDict) ? x + mapDict[x.toLowerCase()] : x).join('');
        console.log(ans);
        return ans;
    }catch (e) {
        console.log('error:' + e instanceof TypeError);
    }
}

let r = translatePlantLatin("I love water!");
console.log("I love water!", "=>", r);
console.log(r === "Imus lophylumvellia wativatelliar!");

let p2 = "A???!!"
let r2 = translatePlantLatin(p2);
console.log(p2, "=>", r2);
console.log(r2 === "Ativa???!!");

let p3 = "Community College";
let r3 = translatePlantLatin(p3);
console.log(p3, "=>", r3);
console.log(r3 === "Cophylummmureanimusty Cophylumllelliagellia");

let p4 = "hello world";
let r4 = translatePlantLatin(p4);
console.log(p4, "=>", r4);
console.log(r4 === "helliallophylum wophylumrld");
