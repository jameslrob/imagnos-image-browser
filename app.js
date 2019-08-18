const reader = require("./directory-reader");

// Create a file path to the directory we'll be searching through.
function filePath()
{
    let path = "";

    // Obtain a command line argument for a file path
    if(process.argv.length > 2)
    {
        process.argv.forEach(
            (string, index) => { console.log(index + " = " + string); }
        )
    
        path = process.argv[2];
    }

    return path;
}

// To hold the directory that we'll be searching.
let path = filePath();

// Read a directory to find files.
let directories = reader.read(path);

if(directories)
{
    console.log(directories);
}