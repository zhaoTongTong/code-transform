'use strict'

function checkInput(inputZipcode) {
  const length = [5, 9, 10];
  const correctLengthCode = length.find(element => element === inputZipcode.length);
  const verifiedCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-'];

  const charsVerifed = !inputZipcode
      .split('')
      .some(code => verifiedCodes.every(verifiedCode => verifiedCode !== code));

  return correctLengthCode && charsVerifed;

}

function calculateCheckDigit(zipcode) {

  const checkDigit = (10 - zipcode.reduce((pre, cur) => pre + cur) % 10)%10;

  zipcode.push(checkDigit);
  return zipcode;
}

function buildBarcode(codes, transformStandard) {

  return `|${codes.map(code => transformStandard[code]).join('')}|`;
}

module.exports = {
  checkInput: checkInput,
  calculateCheckDigit: calculateCheckDigit,
  buildBarcode: buildBarcode
}