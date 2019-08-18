const reader = require("./directory-reader.js");

function start() {
    console.log("Starting.");
}

function end(error, fileArray) {
    if(error) throw error;

    console.log(fileArray);
}

let path = "";

if(process.argv.length > 2)
{
    process.argv.forEach(
        (string, index) => { console.log(index + " = " + string); }
    )

    path = process.argv[2];
}

reader.read(path, start, end);