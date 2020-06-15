
function grid(seedCount){
    //initialize rows and columns
    let r = 1;
    let c = 1;
    let done = false;
    while (!done){
        if (r * c >= seedCount){
            done = true;
        } else {
            if(c > r){
                r++;
            }else if (c === r){
                c++;
            }
        }
    }
    return [r, c];
}
console.log(grid(81));
