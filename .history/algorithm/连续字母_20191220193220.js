// 输入['a','b','c','f','g','h']
// 返回['a-c','f','g-h']

const normalizeArr = function (arr) {
  const res = []
  let temp = arr[0]
  arr.forEach((val, index) => {
    if (index + 1 === arr.length || (val.charCodeAt(0) + 1 !== arr[index + 1].charCodeAt(0))) {
      if (val != temp) {
        res.push(`${temp[0]}-${value}`)
      } else {
        res.push(`${val}`)
      }
      temp = arr[index + 1]
    }
  })

  return res
}