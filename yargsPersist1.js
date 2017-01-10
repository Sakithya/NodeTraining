var storage = require('node-persist');
storage.initSync();

var argv = require('yargs')
	.command('create', 'Save details of user', function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Your first name goes here',
				type: 'string'
			},
      city: {
				demand: false,
				alias: 'c',
				description: 'Your city goes here',
				type: 'string'
			},
      country: {
				demand: false,
				alias: 'co',
				description: 'Your country goes here',
				type: 'string'
			}
		}).help('help');
	})

  .command('get', 'Get details of user', function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'User name',
				type: 'string'
			}
		}).help('help');
	})
	.help('help')
	.argv;
var command = argv._[0];

function createAccount (account) {
	var accounts = storage.getItemSync('accounts');

	if (typeof accounts === 'undefined') {
		accounts = [];
	}

	accounts.push(account);
	storage.setItemSync('accounts', accounts);

	return account;
}

function getAccount (accountName) {
	var accounts = storage.getItemSync('accounts');
	var matchedAccount;

	accounts.forEach(function (account) {
		if (account.name === accountName) {
			matchedAccount = account;
		}
	});

	return matchedAccount;
}

if (command === 'create') {
	var createdAccount = createAccount({
		name: argv.name,
		city: argv.city,
		country: argv.country
	});
	console.log('Account created!');
	console.log(createdAccount);
} else if (command === 'get') {
	var fetchedAccount = getAccount(argv.name);

	if (typeof fetchedAccount === 'undefined') {
		console.log('Account not found');
	} else {
		console.log('Account found!');
		console.log(fetchedAccount);
	}
}
