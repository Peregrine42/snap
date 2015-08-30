/*jslint indent: 2 */
/*global m */
/*global puts */
/*global print */
/*global _ */
/*global document */
"use strict";

var actions = [{x: 50, y: 50, type: "point"}];

function svg_attr(label, value) {
  return "[" + label + "=" + value + "]";
}

function to_a(a) {
  return _.map(a, function(i) {
    return i;
  });
}

function svg_string() {
  var args = to_a(arguments);
  var type = args.shift();
  print(type);
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

function build_point(action) {
  var x = action.x;
  var y = action.y;

  var r = 5;

  return svg_string(circle, x, y, r);
}

function build_components(actions) {
  var components = [];
  actions.forEach(function(action) {
    var component = m(build_point(action));
    components.push(component);
  });
  return components;
}

function build_main() {
  return m("svg[height='500px'][width='500px']",
    build_components(actions)
  );
}

m.render(document.body, [
  build_main()
]);
