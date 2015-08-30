/*global components*/
/*global svg_builder*/
/*global build_background, build_point, build_list*/
/*global circle*/
/*global m, _*/

function build_components(actions) {
  var components = [];
  actions.forEach(function(action) {
    var component = m(build_point(action));
    components.push(component);
  });
  return components;
}

function build_main(actions) {
  return m("div", [
      m(
        "svg[height='500px'][width='500px']"
      , build_background()
      , build_components(actions)
      )
    , build_list(actions)
    ]
  );
}

var components = {
  "main": build_main,
  "background": build_background,
  "from_actions": build_components,
  "point": build_point
};
