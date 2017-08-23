// 深度优先搜索  dfs
const box = [];
const book = {};
function dfs(step, start, end) {
  if (start > end) {
    console.log('不符合要求');
    return false;
  }
  if (step > end - start) {
    console.log(...box);
    return false;
  }
  for (let i=start; i<=end; i++) {
    if (!book[i]) {
      box[step] = i;
      book[i] = 1;
      dfs(step+1, start, end);
      book[i] = 0;
    }
  }
  return
}


dfs(0, 2, 5)