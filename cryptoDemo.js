var crypto = require('crypto-js');

var secretMessage = {
  name : 'facebook',
  secretName : '007'
};
var secretKey = '123abc';

var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage),secretKey);
console.log('Encrypted Message: '+ encryptedMessage);

var bytes = crypto.AES.decrypt(encryptedMessage,secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));
console.log('after decrypt');
console.log(decryptedMessage);
