const user = os.userInfo();
console.log(user);
//mmethod returns the system uptime in seconds;
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS ={
    name:os.type(),
    release:os.release(),
    total:os.totalmem(),
    freemen:os.freemem(),
    pc_architechture:os.arch()
}
console.log(currentOS);