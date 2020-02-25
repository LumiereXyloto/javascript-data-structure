let arr1 = [1,2,[3,[4,5]],6]
let arr2 = [[1,2],[[3],[[4,5],[6]]],7]

function _isArr(a) {
  if (Object.prototype.toString.call(a) === '[object Array]') {
    return true
  }
  return false
}

// 依次扫描字符串，如果是 [ 则入栈，计数加一，如果是 ] 则出栈，计数减一，期间记录的计数的最大值即为最大深度。
function getDepth(arr) {
  let stack = []
  let temp = 0, max = 0
  if (_isArr(arr)) {
    let str = JSON.stringify(arr)
    for (let i = 0, length = str.length; i < length; i++) {
      let char = str.charAt(i)
      if (char === '[') {
        stack.push(char)
        temp += 1
        max = temp > max ? temp : max
      } else if (char === ']') {
        stack.pop
        temp -= 1
      }
    }
  }
  return max
}

function getDepth2(arr, num = 1) {
  let max = num
  for(let i of arr) {
    if (Array.isArray(i)) {
      max = Math.max(max, getDepth2(i, num + 1))
    }
  }
  return max
}

console.log(getDepth(arr1))
console.log(getDepth(arr2))
console.log(getDepth2(arr2))
