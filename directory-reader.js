const fileSystem = require('fs');

let pathName = ".test";

function readDirectory(dirPath, startCallback, endCallback)
{
    if(typeof dirPath       !== "string")   return false;
    if(typeof startCallback !== "function") return false;
    if(typeof endCallback   !== "function") return false;

    if(dirPath.length <= 0) dirPath = pathName;

    console.log("Beginning file reading " + process.cwd() + "/" + dirPath + "..");

    startCallback();

    fileSystem.readdir(dirPath, endCallback);

    return true;
}

module.exports.read = readDirectory;