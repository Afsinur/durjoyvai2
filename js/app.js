const qs_a = (sl) => document.querySelectorAll(sl);
const mk_arr = (arr) => Array.from(arr);
const css = (sl, obj) => Object.assign(sl.style, obj);

let locations = [
  { x: 555, y: 38 },
  { x: 555 - 20, y: 38 + 25 },
  { x: 506, y: 38 + 40 },
  { x: 576, y: 38 + 43 },
  { x: 536, y: 38 + 60 },
  { x: 660, y: 38 + 70 },
  { x: 529, y: 60 + 70 },
  { x: 650, y: 65 + 71 },
  { x: 595, y: 75 + 75 },
  { x: 515, y: 96 + 96 },
  { x: 558, y: 98 + 97 },
  { x: 595, y: 98 + 97 },
  { x: 595 + 15, y: 98 + 97 + 20 },
  { x: 472, y: 98 + 98 + 32 },
  { x: 472 + 46, y: 98 + 98 + 32 + 36 },
  { x: 472 + 46 + 50, y: 98 + 98 + 32 + 38 },
  { x: 472 + 46 + 130, y: 98 + 98 + 32 + 39 },
  { x: 472 + 46 + 86, y: 98 + 98 + 32 + 50 },
  { x: 472 + 46 + 34, y: 98 + 98 + 32 + 50 + 18 },

  { x: 448, y: 60 + 58 },
  { x: 448 + 25, y: 60 + 58 + 20 },
  { x: 448 + 25 + 27, y: 60 + 58 + 23 },
  { x: 450, y: 60 + 58 + 30 },
  { x: 450 + 10, y: 60 + 58 + 30 + 35 },
];

function setPositions() {
  console.log(mk_arr(qs_a(".locations a")).length);
  mk_arr(qs_a(".locations a")).forEach((a, i) => {
    css(a, {
      top: `${locations[i].y}px`,
      left: `${locations[i].x}px`,
    });
  });
}

//init
setPositions();
