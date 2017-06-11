var moment = require('moment');

console.log(moment().format());

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1496929261;

var currentMoment = moment.unix(timestamp);
console.log('current moment' , currentMoment.format('MMM D, YY @ h:mm a'));

console.log('current moment' , currentMoment.format('MMM D, YY @ h:mm a'));
