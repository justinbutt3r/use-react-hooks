const hookGenerator = require("./hookGenerator");

module.exports = function (plop) {
  plop.setGenerator("hook", hookGenerator);
};
