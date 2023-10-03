//Modules...
//CommonJs, every file in node is module (By default);
// modules, encapsulated code (only share minimum);
const names = require('./4.names')
const BoloNamaste = require('./5.utils')
console.log(names);
BoloNamaste(names.name2);
BoloNamaste(names.name4);