const { readFile, writeFile } = require('fs');

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
    })
})