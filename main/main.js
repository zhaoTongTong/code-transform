'use strict'

const table = [
  '||:::', ':::||', '::|:|', '::||:', ':|::|',
  ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'
];

function zipcodeToBarcode(zipcode) {
  if (!validateZipcode(zipcode)) {
    return {success: false, error: 'invalid_zipcode'};
  }
  const zipcodeWithoutDash = formatZipcode(zipcode);
  const zipcodeDigitArray = toDigitArray(zipcodeWithoutDash);
  const checkDigit = calculateCheckDigit(zipcodeDigitArray);
  const barcode = toBarcode(zipcodeDigitArray.concat(checkDigit));
  const value = formatBarcode(barcode);

  return {success: true, value};
}

function validateZipcode(zipcode) {

  return /^\d{5}$/.test(zipcode)
      || /^\d{9}$/.test(zipcode)
      || /^\d{5}-\d{4}/.test(zipcode);
}

function formatZipcode(zipcode) {
  return zipcode.replace('-', '');
}

function toDigitArray(zipcodeWithoutDash) {

  return zipcodeWithoutDash.split('').map(c=> parseInt(c));
}

function calculateCheckDigit(digitArray) {
  return (10 - digitArray.reduce((a, b) => a + b) % 10) % 10;
}

function toBarcode(zipcodeArray) {

  return zipcodeArray
      .map(zipcode => table[zipcode])
      .join('');
}

function formatBarcode(barcode) {
  return `|${barcode}|`;
}

module.exports = {
  zipcodeToBarcode: zipcodeToBarcode
}