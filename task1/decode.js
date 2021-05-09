
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz';
const caesarCipher = (string, shift) => {

  let decoded = '';
  if (shift > 26) {
    shift = shift % 26;
  }
  let i = 0;
  while (i < string.length) {
    if (alphabet.indexOf(string[i]) !== -1) {
      const alphabetIndex = alphabet.indexOf((string[i]));
      if (alphabet[alphabetIndex - shift]) {
        decoded += alphabet[alphabetIndex - shift];
      }
      else {
        decoded += alphabet[alphabetIndex - shift - 26];
      }
    }
    else {
      decoded += string[i];
    }
    i++;
  }
  return decoded;
};
console.log(caesarCipher('EpD12',1))