// 冒泡排序，两个循环，外层循环指的每一次冒泡出一个。

function bubble(arr) {
  const length = arr.length;
  for(let i=0;i<length-1;i++){
    for(let j=0;j<length-1-i;j++){
      if(arr[j] > arr[j+1]) {
        let temp;
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

const arr = [345,2,312,5634,12,32,42,423,32];

bubble(arr);

console.log(arr);