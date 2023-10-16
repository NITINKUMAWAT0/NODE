const { readFile, writeFile } = require('fs');
console.log("**Start**");
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return
    } else {
        console.log(result);
    }
    const first = result
    readFile('./content/first.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return
        } else {
            console.log(result);
        }
        const second = result
        writeFile('./content/result-async.txt',
            `Here is the result : ${first},${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(result);
                }

            }
        )
        console.log("**End**");
    })
})
console.log("**Starts a new block**");
//Asynchronous functions do not block the execution of the program and each command is executed 
//after the previous command even if the previous command has not computed the result. 
//The previous command runs in the background and loads the result once it has finished processing. 
//Thus, these functions are called non-blocking functions. 
//They take a callback function as the last parameter. 
//Asynchronous functions are generally preferred over synchronous functions as they do not block 
//the execution of the program whereas synchronous functions block the execution of the program
// until it has finished processing.