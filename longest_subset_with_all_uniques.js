const longestUniqueSubset = (arr) => {
  let freqElsHash = {};
  let firstUniqHash = {};
  arr.forEach((el) => {
    freqElsHash[el] = 0;
    firstUniqHash[el] = false;
  })
  let valid = false;
  let count = 0;
  let numEls = Object.keys(freqElsHash).length;

  arr.forEach((el, idx) => {
    freqElsHash[el] += 1;
    if(firstUniqHash[el] === false){
      firstUniqHash[el] = true;
      count += 1;
      if(count === numEls){
        j = idx;
        valid = true;
        break;
      }
    }
  })

  let currentWindow = arr.slice(0, j);
  let minLength = j;
  let minWindow = currentWindow;
  let lostEl;
  let i = 0;
  while(i < arr.length - numEls){
    i += 1;
    currentWindow = arr.slice(i, j);
    freqElsHash[arr[i]] -= 1;
    if(freqElsHash[arr[i]] === 0){
      valid = false;
      lostEl = arr[i];
      while(valid === false){
        j += 1;
        freqElsHash[arr[j]] += 1;
        if(j >= arr.length){
          break;
        }
        if(freqElsHash[lostEl] > 0) {
          valid = true;
        }
      }
    }
    if(valid){
      currentWindow = arr.slice(i, j);
      if(minLength < currentWindow.length){
        mineLength = currentWindow.length;
        minWindow = currentWindow;
      }
    }
  }

  return minWindow;
}
