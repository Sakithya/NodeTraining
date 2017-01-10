var argv = require('yargs').argv;

var command = argv._[0];
if(command =='hello' ){
  if(typeof argv.name !=='undefined'){
    console.log('hello' + argv.name);
  }
  if(typeof argv.city !=='undefined'){
    console.log(' '+ argv.city);
  }
  if(typeof argv.country !=='undefined'){
    console.log(' ' + argv.country);
  }
}
