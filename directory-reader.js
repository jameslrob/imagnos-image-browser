// Requires
const fileSystem = require('fs');
const parser = require('./directory-name-parser');

// Member variables
let defaultPath = ".test";

// Directory data object constructor.
function DirectoryData(stringToParse)
{
    console.log(stringToParse);

    let stringArray = parser.break(stringToParse);

    stringArray.forEach(
        (string, index) => { console.log("    " + string); }
    )
}

// Reads a directory using nodejs's filesystem library.
function getDirectoryContents(dirPath)
{
    if(typeof dirPath !== "string")   return 0;

    if(!dirPath) dirPath = defaultPath;

    console.log("Beginning file reading " + process.cwd() + "/" + dirPath);

    let dirArray = [];

    fileSystem.readdir(dirPath, (error, files) => {
            if(error) throw error;

            dirArray = files.map((dirString) => new DirectoryData(dirString));
        }
    );

    return dirArray;
}

// Exports
module.exports.read = getDirectoryContents;