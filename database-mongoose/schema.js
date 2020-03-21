const mongoose = require('mongoose')



let productSchema = mongoose.Schema({
  name: String,
  price: Number,
  colorStyles: [String],
  productPictures: [String],
  productDetails: {
    weight: Number,
    last: String,
    offset: String,
    style: String,
  },
  availSizes: {
    '5': Boolean,
    '5x5': Boolean,
    '6': Boolean,
    '6x5': Boolean,
    '7': Boolean,
    '7x5': Boolean,
    '8': Boolean,
    '8x5': Boolean,
    '9': Boolean,
    '9x5': Boolean,
    '10': Boolean,
    '10x5': Boolean,
    '11': Boolean,
    '11x5': Boolean,
    '12': Boolean,
    '12x5': Boolean,
    '13': Boolean,
    '13x5': Boolean,
    '14': Boolean,
    '15': Boolean,
    '16': Boolean,
    '17': Boolean,
    '18': Boolean
  }
})



module.exports = productSchema



/*

availSizes: {
    3.5: null,
    4: null,
    4.5: null,
    5: null,
    5.5: null,
    6: null,
    6.5: null,
    7: null,
    7.5: null,
    8: null,
    8.5: null,
    9: null,
    9.5: null,
    10: null,
    10.5: null,
    11: null,
    11.5: null,
    12: null,
    12.5: null,
    13: null,
    13.5: null,
    14: null,
    15: null,
    16: null,
    17: null,
    18: null
}
*/