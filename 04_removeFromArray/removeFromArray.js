const removeFromArray = function(paramarray, ...deletionarray) {

    let array = [];
    for(let i = 0; i < paramarray.length; i++)
    {
        if(!deletionarray.includes(paramarray[i]))
        {
            array.push(paramarray[i]);
        }
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
