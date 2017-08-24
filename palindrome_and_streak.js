// [1, 7, 3, 3] => 2 because a length of 2 consecutive 3s
// [1, 1, 1, 1] => 4 because a length of 4 consecutive 1s
// [2, 2, 2, 2, 2, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3] => 5 because a length of 5 consecutive 2s
//
// 1. count streaks and
// 2. then comparing streaks
//
// a streak is where the last number is the same as the current number

// instead of numbers, they're digits

// [77, 7, 723, 1, 1, 1] => 4 because it's 4 7s in a row
//
// array.join
// =>
// "777723111"

// function longestStreak(array){
//   if(array.length === 1){
//     return 1
//   }
//   var i = 1;
//   var maxStreak = 1;
//   var currentStreak = 1;
//   var currentValue;
//   while(i < array.length){
//     currentValue = array[i];
//     if(currentValue === array[i-1]){
//       // we're in a streak
//       currentStreak += 1;
//     } else {
//       // we've broken a streak
//       if(currentStreak > maxStreak){
//         maxStreak = currentStreak;
//       }
//       currentStreak = 1;
//     }
//     i += 1;
//   }
//   if(currentStreak > maxStreak){
//     maxStreak = currentStreak;
//   }
//   return maxStreak;
// }

function longestStreak(array){
  if(array.length <= 1){
    return 1;
  }
  var str = array.join("");
  var maxStreak = 1;
  var currentStreak = 1;
  var currentValue;
  var i = 1;
  while(i < str.length){
    currentValue = str[i];
    if(currentValue === str[i-1]){
      currentStreak += 1;
    } else {
      if(currentStreak > maxStreak){
        maxStreak = currentStreak;
      }
      currentStreak = 1;
    }
    i += 1;
  }

  if(currentStreak > maxStreak){
    maxStreak = currentStreak;
  }

  return maxStreak;

}

function palindrome(str){

  str = str.split(" ").join("")

  var currentPalindromeLength;
  var maxPalindromeLength = 0;
  var substringArr = substrings(str);
  substringArr.forEach((substr) => {
    if(palindromeCheck(substr)){
      currentPalindromeLength = substr.length;
      if(currentPalindromeLength > maxPalindromeLength){
        maxPalindromeLength = currentPalindromeLength;
      }
    }
  })
  return maxPalindromeLength;
}

function substrings(str){
  var subStrArray = [];
  var startChar = 0;
  var endChar;
  while(startChar < str.length){
    endChar = startChar + 1;
    while(endChar < str.length + 1){
      subStrArray.push(str.substring(startChar, endChar));
      endChar += 1;
    }
    startChar += 1;
  }
  return subStrArray;
}

function palindromeCheck(str){
  return str === str.split("").reverse().join("") && str.length >= 3;
}


// 1. get all substrings
// 2. find all palindrome substrings
// 3. find the longest one of those
//
// how does one get substrings from a string
// "abcdef"
// "a"
// "ab"
// "abc"
// "abcd"
// ...
// "abcdef"
// "b"
// "bc"
// "bcd"
// ...
// "bcdef"
// "c"
