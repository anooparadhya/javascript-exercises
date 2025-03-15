const repeatString = function(string, num) {
    if(num < 0)
    {
        return "ERROR";
    }
    
    let returntext = "";

    for(let i = 0; i < num; i++)
    {
        returntext += string;
    }
    return returntext;

};

// Do not edit below this line
module.exports = repeatString;
