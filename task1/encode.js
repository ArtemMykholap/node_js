
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const caesarCipher = (string, shift) => {

  let encoded = '';
  if (shift > 26) {
    shift = shift % 26;
  }
  let i = 0;
  while (i < string.length) {
    if (alphabet.indexOf(string[i]) !== -1) {
      const alphabetIndex = alphabet.indexOf((string[i]));
      if (alphabet[alphabetIndex + shift]) {
        encoded += alphabet[alphabetIndex + shift];
      }
      else {
        encoded += alphabet[alphabetIndex + shift - 26];
      }
    }
    else {
      encoded += string[i];
    }
    i++;
  }
  return encoded;
};
console.log(caesarCipher('This is secret. Message about "_" symbol!',7))