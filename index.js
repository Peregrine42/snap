/*jslint indent: 2 */
/*global m, _ */
/*global puts, print, to_a */
/*global svg_builder, circle */
/*global document */
"use strict";

var actions = [{x: 50, y: 50, type: "point"}];

function build_point(action) {
  var x = action.x;
  var y = action.y;

  var r = 5;

  return svg_builder("string")(circle, x, y, r);
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
  return m("svg[height='500px'][width='500px']"
    , m("rect[height='500px'][width='500px']", {"class":"bg"})
    , build_components(actions)
  );
}

setInterval(function() {
  m.render(document.body, [
    build_main()
  ]);
}, 30);
