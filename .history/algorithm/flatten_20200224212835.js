let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]
// 迭代
const flatten1 = function (arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

// 递归
const flatten2 = function (arr, temp = []) {
  let res = temp
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      return flatten2(item, res)
    } else {
      res = res.push(item) 
    }
  })
}

console.log(flatten2(arr));