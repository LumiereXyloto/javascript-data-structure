// 输入['a','b','c','f','g','h']
// 返回['a-c','f','g-h']

// const normalizeArr = function (arr) {
//   const res = []
//   let temp = arr[0]
//   arr.forEach((val, index) => {
//     if (index + 1 === arr.length || (val.charCodeAt(0) + 1 !== arr[index + 1].charCodeAt(0))) {
//       if (val != temp) {
//         res.push(`${temp[0]}-${value}`)
//       } else {
//         res.push(`${val}`)
//       }
//       temp = arr[index + 1]
//     }
//   })

//   return res
// }

const normalizeArr2 = function(arr) {
  let res = []
  let resItem = arr[0]
  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i].charCodeAt(0) + 1 === arr[i + 1].charCodeAt(0)) {
      resItem = `${resItem[0]}-${arr[i + 1]}`
      console.log(resItem);
    } else {
      res.push(resItem)
      resItem = arr[i+1]
    }
  }
  // 处理最后两个元素
  if (arr[arr.length - 2].charCodeAt(0) + 1 === arr[arr.length - 1]) {
    resItem = `${resItem[0]}-${arr[arr.length - 1]}`
    res.push(resItem)
  } else {
    res.push(resItem)
    res.push(arr[arr.length - 1])
  }
  return res
}

let arr = ['a','b','c','f','g','h']
let res = normalizeArr2(arr)
console.log(res);