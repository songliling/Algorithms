//快速排序是一个排序速度较快的算法，可以用于工业界，时间复杂度为O(NlogN)

function quickSort(arr) {
  if(arr.length <=1) {
    return arr;
  }
  let left = [];
  let right = [];
  let midd = Math.floor(arr.length / 2);
  let temp = arr.splice(midd, 1)[0];
  arr.forEach(item => {
    if(item <= temp) {
      left.push(item);
    } else {
      right.push(item);
    }
  });
  return quickSort(left).concat(temp, quickSort(right));
}

const arr = [3,2,1,321,12432,432,56,54,312,65,23,4,1,4,1,5,7,58];

console.log(quickSort(arr));


//去重
function removeRepeat(arr) {
  const length = arr.length;
  let result = [];
  for(let i=0;i<length;i++){
    if(result.length === 0 || result[result.length - 1] !== arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeRepeat(quickSort(arr)))
console.log(111)
