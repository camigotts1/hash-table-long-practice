function anagrams(str1, str2) {
  //need hash table -> multiple of the same letters means values are not unique
  let obj1 = {};
  let obj2 = {};

  for(let i = 0; i < str1.length; i++){
    if(obj1[str1[i]]){
      obj1[str1[i]]++;
    }
    else{
      obj1[str1[i]] = 1;
    }
  }
  for(let i = 0; i < str2.length; i++){
    if(obj2[str2[i]]){
      obj2[str2[i]]++;
    }
    else{
      obj2[str2[i]] = 1;
    }
  }

  for(key in obj1){
    if(obj2[key] !== obj1[key]){
      return false;
    }
  }

  return true;
}


function commonElements(arr1, arr2) {
  let newArray = [];

  let set1 = new Set(arr1);
  let set2 = new Set(arr2);

  for(let element of set1){
    if(set2.has(element)){
      newArray.push(element);
    }
  }
  return newArray;
}


function duplicate(arr) {
  let obj = {};
  for(let i = 0; i < arr.length; i++){
    if(obj[arr[i]]){
      obj[arr[i]]++;
      return arr[i];
    }
    else{
      obj[arr[i]] = 1;
    }
  }
}


function twoSum(nums, target) {
  let set = new Set(nums);

  for(let element of set){
    if(set.has(target - element) && element * 2 !== target){
      return true;
    }
  }

  return false;
}


function wordPattern(pattern, strings) {
  let objString = {};

  if(pattern.length !== strings.length) return false;

  for(let i = 0; i < pattern.length; i++){
    let key = pattern[i];
    if(objString[key]){

      //if key exists and is assigned to a different string
      if(!(objString[key] === strings[i])){
        return false;
      }
    }
    else{
      //if value exists with another key, return false
      if(Object.values(objString).indexOf(strings[i]) > -1){
        return false;
      }
      objString[key] = strings[i];
    }
  }
  return true;
}

// console.log(wordPattern("ABBA", ["dog", "cat", "dog", "dog"]));


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
