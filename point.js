/*global svg_builder */

function build_point(action) {
  var x = action.x;
  var y = action.y;

  var r = 5;

  return svg_builder.string(
    svg_builder.circle, x, y, r
  );
}

