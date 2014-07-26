
// JSON5.parse(text[, reviver])
//
// - text (string): the string to parse as JSON5
// - reviver (function): reviver, same as in JSON.parse
module.exports.parse = function(text, reviver) {
    return require('./lib/json5').parse(text, reviver);
};

// JSON.stringify(value[, replacer [, space]])
// - value (string): the value to convert to JSON5
// - replacer (function|array): replacer, same as in JSON.stringify
// - space (string|number): indentation to use for pretty-print
module.exports.stringify = function(value, replacer, space) {
    return require('./lib/json5').stringify(value, replacer, space);
};

// Hack to allow people to install aseemk/json5 from git without package.json
// file present. If it isn't there, npm would parse this instead, and then
// reinstall package again.
//
/**package
{ "name": "json5",
  "version": "0.0.0",
  "scripts": {"postinstall": "./lib/cli.js -c package.json5 ; npm install"}
}
**/
