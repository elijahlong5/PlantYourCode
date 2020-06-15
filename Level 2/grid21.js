function grid(seeds, rows, cols) {
    let arr = [];
    for (let r = 0; r < rows; r++) {
        let cur_col = [];
        for (let c = 0; c < cols; c++) {
            cur_col.push(seeds[r*cols + c]);
        }
        arr.push(cur_col);
    }
    console.log(arr);
    return arr;
}

let r = grid([
    's1','s2','s3','s4','s5','s6','s7','s8',
], 2, 4);
console.log(r);
