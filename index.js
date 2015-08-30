/*jslint indent: 2 */
/*global m, _, radio */
/*global puts, print, to_a, append */
/*global svg_builder, circle, components */
/*global document */

"use strict";

var actions = [];

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
    components.main(actions)
  ]);
}

radio("main-click").subscribe(add_point);
radio("main-click").subscribe(render);

render();
