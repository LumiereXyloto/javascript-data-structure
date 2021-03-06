// 将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数组

var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

Array.prototype.flat= function() {
  return [].concat(...this.map(item => (Array.isArray(item) ? item.flat() : [item])));
}

Array.prototype.unique = function() {
  return [...new Set(this)]
}

const sort = (a, b) => a - b;

console.log(arr.flat().unique().sort(sort)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ]

// 扁平化
function flat1 (arr) {
  let str = JSON.stringify(arr)
  let res = str.replace(/(\[|])/g, '').split(',') // [需要转义 ]不需要
  let numArr = res.map(Number)
  return numArr
}
console.log(flat1(arr));

let res = []
function flat2 (arr) {
  arr.forEach(item => {
    if (Array.isArray(item)) {
      return flat2(item)
    } else {
      res.push(item)
    }
  })
}
flat2(arr)
console.log(res);