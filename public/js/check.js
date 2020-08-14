import Stack from './stack.js';

const check = (string) => {

  if (string.length === 0) true;

  if (string.length %2 === 0 && string.length %3 === 0) {

    const validBracats = {
      'tac' : 'cat',
      'TAC' : 'CAT',
      'tAc' : 'cAt'
    }

    let bracats = new Stack();

    let derivedWord = '';

    for (let i = 0; i < string.length; i +=3) {

      derivedWord = string.substr(i, 3);

      if (validBracats[derivedWord] === bracats.peek()) {
        bracats.pop();
      } else {
        bracats.push(derivedWord);
      };
    }

    return bracats.isEmpty();

  } else {

    return false;
  }
}

export { check };