const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
const text = readFileSync('./content/subFolder/text.txt','utf-8');
console.log(first,second,text);

writeFileSync(
    './content/result-sync.txt',`Here is a result : ${first} , ${second} , ${text}` , {flag:'a'}
)
const result = readFileSync('./content/result-sync.txt','utf8')

console.log(result);