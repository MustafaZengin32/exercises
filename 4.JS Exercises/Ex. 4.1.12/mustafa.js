/**
Fix the code
The intended behavior is to increment by one but why is this function not working? Can you fix this? (try to
solve this on paper first and then debug the code)
 */

function incrementItems (array) {
    for ( let i = 0; i < array.length ; i++){

        array [i] = array[i] + 1;
    }
    
    return array;

    };

    console.log(incrementItems([1,2,3,4,5]));







