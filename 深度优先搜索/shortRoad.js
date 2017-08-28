var map = [
  [0, 2, null, null ,10],
  [null, 0, 3, null, 7],
  [4, null, 0, 4, null],
  [null, null, null, 0, 5],
  [null, null, 3, null, 0]
]

var min = 99999;
var book = [];

function dfs(loc, dis, target) {
  if (dis > min) return;
  if (loc === target) {
    if (dis < min) {
      min = dis;
      return;
    }
  }
  for (var i=0; i<target + 1; i++) {
    if (map[loc][i] && !book[i]) {
      book[i] = 1;
      dfs(i, dis + map[loc][i], target);
      book[i] = undefined;
    }
  }
  return;
}

dfs(0,0,4);
console.log(min);
console.log(...book)