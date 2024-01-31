
//time complexity O(k * n) where n is the number of keys in obj
function kth(string, k){
    let obj = {};
    for(let i = 0; i < string.length; i++){
        let key = string[i];
        if(obj[key]){
            obj[key]++;
        }
        else{
            obj[key] = 1;
        }
    }

    let j = 0;
    let returnKey = "";
    let largestAmt = 0;
    while(j < k){
        for(key in obj){
            if(obj[key] > largestAmt){
                returnKey = key;
                largestAmt = obj[key];
            }
        }
        obj[returnKey] = 0;
        largestAmt = 0;
        j++;
    }
    return returnKey;
}


// console.log(kth('asdjdlkjdlkjdlllkjldjlkjdfiej', 1));


function newAlphabet(string, alphabet){
    let alphabetObj = {};

    for(let i = 0; i < alphabet.length; i++){
        if(alphabetObj[alphabet[i]]){
            return "alphabet has a duplicate letter";
        }
        else{
            alphabetObj[alphabet[i]] = i;
        }
    }

    let prevLetter = string[0];

    for(let i = 1; i < string.length; i++){
        let currentLetter = string[i];
        if(alphabetObj[currentLetter] < alphabetObj[prevLetter]){
            return false;
        }

        prevLetter = string[i];
    }
    return true;
}

// newAlphabet('dino', 'abcdefghijklmnopqrstuvwxyz');           // => true
// newAlphabet('leetcode', 'abcdefghijklmnopqrstuvwxyz');       // => false
// newAlphabet('leetcod', 'labefghijkmnpqrstucvowxdyz');        // => true


function longestPalindrome(string){
    //a palindrome has equal number of characters on first half and second half
    //only 1 character may have an odd amount (which will be in the middle)
    //all other characters with odd amounts will lose 1 character to be an even amount
    let object = {};
    for(let i = 0; i < string.length; i++){
        let key = string[i];
        if(object[key]){
            object[key]++;
        }
        else{
            object[key] = 1;
        }
    }

    let length = 0;
    let hasOdd = false;

    for(key in object){
        if(object[key] % 2 === 0){
            length+= object[key];
        }
        else {
            length += object[key] - 1;
            hasOdd = true;
        }
    }
    if(hasOdd){
        length++;
    }

    console.log(length);
    return length;
}

// longestPalindrome("abccccdd");     //  => 7 because the palindrome "dccaccd"
//                                       // can be built.
// longestPalindrome("abccccddddeiioopppd");   //15 -> "ccpiodddddoipcc" or "ccddiopppoiddcc"



function longestSubstr(string){
    let object = {};
    let newString = "";
    let longestLength = 0;  //is also the key of longest substring

    for(let i = 0; i < string.length; i++){
        if(newString.includes(string[i])){
            //store the string at {length, "string"}
            object[newString.length] = newString;
            if(newString.length > longestLength){
                longestLength = newString.length;
            }
            newString = string[i];
        }
        else{
            newString+= string[i];
        }
    }
    //console.log(object);
    return longestLength;
}

// console.log(longestSubstr("abcabcbb"));      // => 3, where the longest substring is "abc"
// console.log(longestSubstr("bbbbb"));         // => 1, where the longest substring is "b"
// console.log(longestSubstr("abcdeabcdefabcddc"));


/******will work on these in the future, maybe...** */

// function maxSubarr(array){

// }

// //coins is an array of coin value amounts, valueInCents is the target number to reach with the given coins
// function coinChange(coins, valueInCents){

// }

// //can climb 1, 2, or 3 steps at a time. How many distinct ways can you climb to the top?
// function climbingSteps(num){

// }
