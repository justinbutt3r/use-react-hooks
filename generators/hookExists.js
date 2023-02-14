const fs = require("fs");
const path = require("path");

const hooks = fs.readdirSync(path.join(__dirname, "../use-react-hooks/src"));

function hooksExists(comp) {
  return hooks.indexOf(comp) >= 0;
}

module.exports = hooksExists;
