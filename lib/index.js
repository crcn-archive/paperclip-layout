var bindable       = require("bindable"),
layoutBlockBinding = require("./layoutBinding"),
BlockBinding       = require("./blockBinding");

module.exports = function (pc) {
  var layouts = pc.layouts = new bindable.Object();
  pc.blockBinding("layout", layoutBlockBinding(layouts));
  pc.blockBinding("block", BlockBinding);
  return layouts;
}