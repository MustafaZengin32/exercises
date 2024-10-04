/**
 * Play with arrays and for loop
Initialize two variables to hold the string LaunchCode and the array [1, 5, 'LC101', 'blue', 42], then
construct for loops to accomplish the following tasks:
a) Print each element of the array to a new line.
b) Print each character of the string -in reverse order- to a new line.
 */

let a="LaunchCode";

let b=[1, 5, 'LC101', 'blue', 42];


//a) Print each element of the array to a new line.

for(let i=0;i<a.length;i++){


    console.log(a[i]);

    console.log("\n");


}

console.log("*********************************************************");


//b) Print each character of the string -in reverse order- to a new line.

for(let i=a.length-1;i>=0;i--){


    console.log(a[i]);

    console.log("\n");


}


unction countAdjacentBombs(row, col) {
    let bombCount = 0;
    for (let r = row - 1; r <= row + 1; r++) {
        for (let c = col - 1; c <= col + 1; c++) {
            if (r >= 0 && r < ROWS_COUNT && c >= 0 && c < COLS_COUNT && !(r === row && c === col)) {
                if (cells[r][c].isBomb) {
                    bombCount++;
                }
            }
        }
    }
    return bombCount;
}