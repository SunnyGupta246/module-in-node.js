const { isUtf8 } = require("buffer");
const fs = require ("fs");


// //async function
// console.log("Read file");

// fs.readFile("input.txt", function (err, data) {
//     if (err){
//         console.log("error",err);
//         return err;
//     }
//     console.log(data.toString());
//     console.log("Read file");
//     return data;
// })
// console.log("other stuff");
// const buf = new Buffer(1024);

// fs.open("input.text", "r+", function(err, fd) {
//     if(err)
//     {
//         console.log("error",err);
//     }
//     console.log("File is open");

//     fs.read(fd,buf,0,buf.length,0,function(er,data){
//      if(er)
//      {
//         console.log("Error reading file");
//      }
//      console.log("data :",data.toString());
//     }
//     )
// });
// fs.writeFile("input.txt","sunny gupta",function(err){
//     if(err)
//     {
//         console.log("error",err);
    
//     }
//     else{
//         console.log("file written");
//     }
// })
fs.appendFile("input.txt","is a good boy", isUtf8,function(err){
if(err){
    console.log("error",err);
}
else{
    console.log("file is append ");
}
})