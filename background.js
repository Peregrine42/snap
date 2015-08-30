/*global m */

function build_background() {
  return m(
    "rect[height='500px'][width='500px']",
    {"class":"bg", "onclick": "on_click(event)" }
  );
}
