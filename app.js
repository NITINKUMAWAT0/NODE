const os = require('os');
//info about current user;
const user = os.userInfo();
console.log(user);
//mmethod returns the system uptime in seconds;
console.log(`the system uptime is ${os.uptime()} seconds`);