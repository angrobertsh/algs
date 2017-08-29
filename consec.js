function consecutiveElements(arr){
  var longestLength = 0;
  var obj = {};
  var i = 0;
  while(i < arr.length){
    obj[arr[i]] = [i, false];
    i += 1;
  }

  var j = 0;
  var currentEl = 0;
  var currentLength = 1;
  while(j < arr.length){
    currentLength = 1;
    oriEl = arr[j];
    currentEl = arr[j];
    while(obj[currentEl + 1]){
      if(obj[currentEl + 1][1] === false){
        currentLength += 1;
        currentEl += 1;
        obj[currentEl][1] = true
        // arr.splice(obj[currentEl], 1)
      }
    }

    while(obj[currentEl]){
      if(obj[currentEl - 1][1] === false){
        currentLength += 1;
        currentEl -= 1;
        obj[currentEl][1] = true
        // arr.splice(obj[currentEl], 1)
      }
    }

    if(currentLength > longestLength){
      longestLength = currentLength;
    }
    j += 1;
  }

  console.log(longestLength);
}
