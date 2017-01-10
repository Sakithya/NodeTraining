var argv = require('yargs')
	.command('hello', 'Getting details of user', function (yargs) {
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

	.help('help')
	.argv;
var command = argv._[0];

console.log(argv);

if (command === 'hello' && typeof argv.name !=='undefined' && typeof argv.city !=='undefined' && typeof argv.country !=='undefined') {
	console.log('Hello ' + argv.name + 'city:' + argv.city + 'country:' + argv.country);

} else if (command === 'hello' && typeof argv.name !=='undefined' && typeof argv.city !=='undefined') {
			console.log('Hello ' + argv.name + 'city:' + argv.city);
}
else if (command === 'hello' && typeof argv.name !=='undefined'){
	console.log('Hello ' + argv.name );
}
else if (command === 'hello'){
console.log('Hello world!');
}
