const { log } = require('console');
const os = require('os');
//info about current user;
const path = require('path');
console.log(path.sep);

const filePath = path.join('/content','subFolder','text');

console.log(filePath);

const base = path.basename(filePath);

console.log(base); 

const absolute = path.resolve(__dirname,'content','subFolder','text');
console.log(absolute);