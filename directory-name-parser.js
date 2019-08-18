// Returns the closing bracket character for a given open bracket.
function closingBracketChar(openBracket)
{
    let closingBracket = "";

    switch(openBracket)
    {
        case '[':
            closingBracket = ']';
            break;
        case '(':
            closingBracket = ')';
            break;
        case '{':
            closingBracket = '}';
            break;
        case '<':
            closingBracket = '>';
            break;
        default:
            break;
    }

    // Returns an empty character if the passed in parameter was not an open bracket character.
    return closingBracket;
}

// Returns a string found between two brackets.
// Ignores nested brackets.
function extractBracketedString(_fullString, _openBracketPosition)
{
    // const versions of parameters for preservation.
    const [str, pos] = arguments;
    const openBracketChar = str[pos];

    // Generate the closing bracket character we'll be searching for.
    const searchChar = closingBracketChar(openBracketChar);

    if(searchChar)
    {
        // Tally to ignore nested brackets of the same type
        let openBracketCount = 0;

        // Keep looping until we've reach the matching closing bracket or we've reached the end of the string.
        let i = pos;
        let currentChar;
        do {
            // go to the next character in the string.
            currentChar = str[++i];
            
            // Check if the current character is an open bracket, so we can ignore the next closing bracket
            switch(currentChar)
            {
                case openBracketChar:
                    ++openBracketCount;
                    break;
                case searchChar:
                    --openBracketCount;
                    break;
                default:
                    break;
            }
        }
        while(openBracketCount !== -1 || i === str.length);

        // If we reached the end of the string
        if( i === str.length )
        {
            // Print debug stuff.
            console.log("Unmatched '" + startChar + "' detected at position " + pos);
            console.log(str);
            console.log(str.substring(pos-10, pos+10));
        }

        // Return the substring
        let startOfSubstring = pos+1;
        let endOfSubstring = i;
        return str.substring(startOfSubstring, endOfSubstring);
    }
}

// Finds strings contained within brackets within a string and retruns an array of them.
// For example: [first](second)[third (fourth)] should return [first, second, third (fourth), fourth]
// TODO: Do some recursive search within the generated array to find any nested parenthesis/brackets.
function breakString(fullString)
{
    // The current character that we're looking at
    let position;

    // Holds each string, in order of extraction, that we find in the full string.
    let returnArray = [];

    // Go through each character of the string
    for (position = 0; position < fullString.length; ++position )
    {
        // Get the current character
        switch(fullString[position])
        {
            // We're entering a bracket
            case '[':
            case '(':
            case '{':
            case '<':
                // Attempt to extract a string if we've found an open bracket.
                returnArray.push(extractBracketedString(fullString, position));
                break;
            // We're not in a bracket
            default:
                break;
        }
    }

    return returnArray;
}

module.exports.break = breakString;