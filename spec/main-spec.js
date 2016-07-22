'use strict'
const main = require('../main/main');

describe('main', () => {
  it('checked correct format', () => {

    const inputZipcode = '12345-1234';
    const actualZipcode = main.checkInput(inputZipcode);
    expect(actualZipcode).toEqual(true);
  });

  it('checked wrong format', () => {
    const inputZipcode = 'a1234';
    const actualZipcode = main.checkInput(inputZipcode);

    expect(actualZipcode).toEqual(false);
  });

  it('calculateCheckDigit', () => {
    const zipcode = [1,2,3,4,5];
    const expectCode = [1,2,3,4,5,5];
    const actualCode = main.calculateCheckDigit(zipcode);
    expect(actualCode).toEqual(expectCode);
  });
  
  it('buildBarcode', () => {

    const code = [1, 2, 3, 4, 5, 5];
    const transformStandard =
         ['||:::',
          ':::||',
          '::|:|',
          '::||:',
          ':|::|',
          ':|:|:',
          ':||::',
          '|:::|',
          '|::|:',
          '|:|::]'
         ];

    const actualBarcode = main.buildBarcode(code, transformStandard);
    const expectBarcode = '|:::||::|:|::||::|::|:|:|::|:|:|';
    expect(actualBarcode).toEqual(expectBarcode);

  });

});