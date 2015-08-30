/*global _ */

function puts(obj) {
  console.log(JSON.stringify(obj));
}

function print(obj) {
  console.log(obj);
}

function append(self, obj) {
  self.push(obj);
}

function on(target, action) {
  return function() {
    target.apply(target, arguments);
    action();
  };
}

function to_a(a) {
  return _.map(a, function(i) {
    return i;
  });
}
