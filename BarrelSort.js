/*桶排序，最简单的排序，速度快，但是空间复杂度高。
  随机输入范围是0-100的随机个数，然后进行排序
  思路：既然范围是0-100，那么就申请一个长度为101的数组arr，初始化数组中每个元素为0，输入的数字如果在0-100之间，
那么在数组对应标的元素的值加1，反之，自动扔掉此输入值
  */

function BarrelSort(arr, waitArr) {
  // arr长度为M
  // waitArr长度为N
  waitArr.forEach(item => {
    if (item < 0 || item > 100) {
      return false;
    }
    arr[item] += 1;
  })
  // 代码执行N次
  let result = [];
  for (let i=100;i>=0;i--){
    while(arr[i] !== 0){
      result.push(i)
      arr[i]--;
    }
  }
  //代码执行M+N次
  return result;
}

//整体时间复杂度 M + 2N

const arr = Array.from({ length: 101 }, item => 0);

const waitArr = [10,1000,20,31,2,1,5,4,1,34,123];

console.log(BarrelSort(arr,waitArr));
