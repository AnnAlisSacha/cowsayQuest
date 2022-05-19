const user = require('./information.js');
const cowsay = require("cowsay");
const { infos } = require('./information.js');

console.log(infos.name);
console.log(cowsay.say({
    text : "I'm " + infos.name + " and my campus is " + infos.campus,
    e : "♥♥",
    T : "U "
}));
