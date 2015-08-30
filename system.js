function puts(obj) {
  console.log(JSON.stringify(obj));
}

function print(obj) {
  console.log(obj);
}

function set_background_color(self, color) {
  w = self.attr("width");
  h = self.attr("height");
  rect = self.rect(0,0,w,h);
  rect.attr("fill", color);
}

function append(self, obj) {
  self.push(obj);
}

function point(evt) {
  return {
    type: "point",
    x: evt.offsetX,
    y: evt.offsetY
  }
}

function on(target_function, action) {
  return function() {
    target_function.apply(target_function, arguments);
    action();
  }
}

