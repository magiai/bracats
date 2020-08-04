const check = (string) => {

  if (string.length === 0) true;

  //check validity of the derived 3-letter words
  const checkValidity = (bracats) => {
    
    const validBracats = {
      'tac' : 'cat',
      'TAC' : 'CAT',
      'tAc' : 'cAt'
    }

    //return the last word to find the closing bracat
    const peek = () => {

      if (checkArr.length === 0) {
        return null;
      }

      return checkArr[checkArr.length - 1];
    }

    let checkArr = [];

    for (let i = 0; i < bracats.length; i++) {

      //check if current word matches the last one if so delete it
      if (validBracats[bracats[i]] === peek()) {
        checkArr.pop();
      } else {
        checkArr.push(bracats[i]);
      };
    }

    return checkArr.length === 0
  }
  
  if (string.length %2 === 0 && string.length %3 === 0) {
    
    let wordsArr = [];
    
    //divide a string to get 3-letter words
    for (let i=0; i < string.length; i += 3) {
      wordsArr.push(string.substr(i, 3));
    }
  
    return checkValidity(wordsArr)

  } else {
    return false;
  }
}

export { check };