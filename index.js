/*jslint indent: 2 */
/*global m, _ */
/*global puts, print, to_a, append */
/*global svg_builder, circle */
/*global document */
/*global radio */

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

function background_rect() {
  return m(
    "rect[height='500px'][width='500px']",
    {"class":"bg", "onclick": "on_click(event)" }
  );
}

function build_main() {
  return m(
    "svg[height='500px'][width='500px']"
    , background_rect()
    , build_components(actions)
  );
}

function on_click(evt) {
  radio("main-click").broadcast(evt);
}

function add_point(evt) {
  append(
    actions,
    {x: evt.offsetX, y: evt.offsetY, type: "point"}
  );
}

function render() {
  m.render(document.body, [
    build_main()
  ]);
}

radio("main-click").subscribe(add_point);
radio("main-click").subscribe(render);

render();
