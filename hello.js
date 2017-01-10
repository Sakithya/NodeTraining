console.log('starting password manager');

//node persist is a persistent file manager
// require - to import
var storage=require('node-persist');
storage.initSync();

storage.setItemSync('accounts', [{
  username: 'Sakithya',
  balance: 100
},{
  username : 'moana',
  balance : 1000
}]);

var accounts = storage.getItemSync('accounts');
console.log('accounts');
accounts.push({
  username : 'jane',
  balance : 75
});

//to sync the item to existing file
storage.setItemSync('accounts',accounts);
