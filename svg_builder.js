/*global to_a */
/*global _ */
/*global svg_builder */

function svg_attr(label, value) {
  return "[" + label + "=" + value + "]";
}

function svg_string() {
  var args = to_a(arguments);
  var type = args.shift();
  return type.apply(type, args);
}

function svg_string_builder(zipped) {
  var builder = function(total, n) {
    return total + svg_attr(n[0], n[1]);
  };
  return _.reduce(zipped, builder, "");
}

function circle() {
  var attrs = ["cx", "cy", "r"];
  var zipped = _.zip(attrs, arguments);
  return "circle" + svg_string_builder(zipped);
}

var svg_builder = {
  "attr": svg_attr,
  "string": svg_string,
  "build": svg_string_builder,
  "circle": circle
};
