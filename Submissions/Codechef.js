// https://www.codechef.com/problems/TALLER
let fs = require("fs");     // Node.js File System Module
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function input() {
  return data[idx++];
}

let tcs = parseInt(input());
for (let tc = 0; tc < tcs; tc++) {
    let xy = input().split(" ");
    console.log((xy[0] > xy[1] ? "A" : "B"));
}

// https://www.codechef.com/problems/PRESENTS
let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function input() {
  return data[idx++];
}

let tcs = parseInt(input());
for (let tc = 0; tc < tcs; tc++) {
    let n = parseInt(input());
    console.log(~~(n / 5) * 4 + (n % 5));   // ~~ used for Floor Division
}

// https://www.codechef.com/problems/SEMCOURSES
let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function input() {
  return data[idx++];
}

let tcs = parseInt(input());
for (let tc = 0; tc < tcs; tc++) {
    let arr = input().split(" ").map(Number);
    console.log(arr[0] * arr[1] * arr[2]);
}
