const os = require('os');

console.log("arcticture of cpu"+ os.arch());
console.log("free space"+ os.freemem());
console.log("total space"+ os.totalmem());
console.log("Network interface"+ os.networkInterfaces());
console.log("temprary directory"+ os.tmpdir());

console.log("endeniess of cpu"+os.endianness());
console.log("endeniess of os"+os.type());
console.log("endeniess of os"+os.hostname());
console.log("endeniess of os"+os.release());
console.log("endeniess of os"+os.platform());
