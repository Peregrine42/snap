/*global _, m */

function action_string(action) {
  var result = "created ";
  result += action.type;
  result += " at (";
  result += action.x;
  result += ",";
  result += action.y;
  result += ")";
  return result;
}

function build_list(actions) {
  var action_rows = _.map(actions, function(action) {
    return m(
      "tr"
    , [
        m("td", action_string(action))
      ]
    );
  });
  return m(
      "table"
    , action_rows
  );
}
