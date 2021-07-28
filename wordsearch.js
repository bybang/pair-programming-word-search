// PAIR PROGRAM - WORD SEARCH
// ANTHONY KIM, JOSHUA BANG

const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalArray = transpose(letters).map(letters => letters.join(''));
  
    for (const wordsV of verticalArray) {
      if (wordsV.includes(word)) {
        return true;
      }
    }
      
    for (const wordsH of horizontalJoin) {
      if (wordsH.includes(word)) {
        return true;
      }
    }
  
    return false;
  };
  
  module.exports = wordSearch;
  
  //Callback
  const transpose = function(matrix) {
    let finalArray = [];
    let stagingArray = [];
    let counter = matrix[0].length;
    while (counter > 0) {
      for (const array of matrix) {
        for (let i = 0; i < array.length; i++) {
          stagingArray.push(array.shift());
          break;
        }
      }
      finalArray.push(stagingArray);
      stagingArray = [];
      counter--;
    }
    return finalArray;
  };
  
    