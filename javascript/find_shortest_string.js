function findShortestString(arr) {
  let shortest = arr[0]
  arr.map((str) => {
    if(str.length < shortest.length){
      shortest = str
    } 
  })
  return shortest;
}

// console.log(findShortestString(['aaa', 'a', 'bb', 'ccc']))

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

// module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
