//npm - global command, comes with node.
//npm --version.

//local dependency - use it only in this particular project.
//npm i <package-name>.

//global dependency - use it in any project.
//npm install -g <package-name>.

//package.json - maqnifest file (stores important info about project / package),
//manual approach (create package.json in the root, create properties etc).
//npm init (step by step, press enter to skip)
//npm init -y (everything will be default).

const { log } = require('console');
const _ = require('lodash');

const item = [1,[2,[3,[4,[5]]]]];
const newItems = _.flattenDeep(item);
console.log(newItems);
console.log("hello guys im learning node.js");
console.log("and right now im learing npm commands");