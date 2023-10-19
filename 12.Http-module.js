
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our home page');
    }
    if (req.url === '/about') {
        res.end('here is our little history');
    }
    else{
        res.end(`
        <h1>Oops!</h1>
        <p>unable to find the page you want..</p>
        <a href="/">Back to home</a>
        `)
    }
 

})
server.listen(5000)
