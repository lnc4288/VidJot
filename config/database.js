if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://idrathershred:i5n0wb04rd@ds121495.mlab.com:21495/vidjot-prod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}