// 最小堆的建立

function createMinHeap(arr) {
  let result = []
  if (!arr || arr.length === 0) return []
  arr.forEach((item, index) => {
    result[index] = arr[index]
    arrowUp(result, index)
  })
  return result
}

function swag (arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
// 向上生成
function arrowUp (arr, i) {
  if (i === 1) return
  let flag = false
  while (i!=1 && !flag) {
    let j = Math.floor(i / 2)
    if (arr[j] > arr[i]) {
      swag(arr, i, j)
      i = j
    } else {
      flag = true
    }
  }
}

// 堆排序
function arrowDown (arr, i) {
  const length = arr.length
  if (i > length) return
  let flag = false
  while (2*i <=length && !flag) {
    let t
    if (arr[i] > arr[2 * i]) {
      t = 2*i
    } else {
      t = i
    }
    if (2 * i + 1 <=length && arr[t] > arr[2 * i +1]) {
     t = 2*i+1
    }
    if (t!=i) {
      swag(arr, t, i)
      i = t
    } else {
      flag = true
    }
  }
}

var a = createMinHeap([,4,1,77,3,36,54,23,56])
console.log(a.slice(1))

let result = []

let length = a.length
for (let i=1;i<length;i++) {
  result.push(a[1])
  a[1] = a[a.length - 1]
  arrowDown(a,1)
  a.pop()
}

console.log(result)




