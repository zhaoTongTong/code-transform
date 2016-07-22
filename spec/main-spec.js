'use strict'
const postnet = require('../main/main');

describe('postnet', () => {
  describe('main', () => {

    it('should translate zipcode to barcode', () => {
      [
        {
          zipcode: '12345',
          barcode: '|:::||::|:|::||::|::|:|:|::|:|:|'
        }
      ].forEach(example => {
        const result = postnet.zipcodeToBarcode(example.zipcode);
        expect(result.success).toBeTruthy();
        expect(result.value).toEqual(example.barcode);
      });
    });

    // it('zipcode is invalid', () => {
    //   ['123456', 'av13'].forEach(example => {
    //     const result = postnet.zipcodeToBarcode(example);
    //     expect(result.success).toBeFalsy();
    //     expect(result.error).toEqual('invalid_zipcode');
    //   });
    // });
  });
});