function addNumber(arr) {
  let obj = {}
  let res = []
  // 给所有元素编号
  arr.forEach(item => {
    if (obj[item]) {
      obj[item] += 1
    } else {
      obj[item] = 1
    }
    res.push(`${item}${obj[item]}`)
  })
  // 只出现一次的元素去掉编号, 把res中的一次元素替换为arr中的原始元素
  arr.forEach((item, index) => {
    if (obj[item] === 1) {
      res[index] = item
    }
  })
  return res
}

let arr = ['ab','b','ab','c','ab']
console.log(addNumber(arr))