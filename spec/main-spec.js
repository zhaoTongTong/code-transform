'use strict'
const postnet = require('../main/main');

describe('postnet', () => {
  describe('main', () => {

    it('should translate zipcode to barcode', () => {
      [
        {
          zipcode: '12345',
          barcode: '|:::||::|:|::||::|::|:|:|::|:|:|'
        },
        {
          zipcode: '123451234',
          barcode: '|:::||::|:|::||::|::|:|:|::::||::|:|::||::|::|:|:|:|'
        },
        {
          zipcode: '12345-1234',
          barcode: '|:::||::|:|::||::|::|:|:|::::||::|:|::||::|::|:|:|:|'
        }
      ].forEach(example => {
        const result = postnet.zipcodeToBarcode(example.zipcode);
        expect(result.success).toBeTruthy();
        expect(result.value).toEqual(example.barcode);
      });
    });

    it('zipcode is invalid', () => {
      ['456', '45056-123', '45010101001010'].forEach(zipcode => {
        const result = postnet.zipcodeToBarcode(zipcode);
        expect(result.success).toBeFalsy();
        expect(result.error).toBe('invalid_zipcode');
      });
    });
  });
});