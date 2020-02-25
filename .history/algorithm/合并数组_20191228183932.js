// 请把俩个数组 [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C, D]，合并为 [A1, A2, A, B1, B2, B, C1, C2, C, D1, D2, D]

const arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
const arr2 = ['A', 'B', 'C', 'D']

const res = []
let j = 0
let temp = arr2[0]
for (let i = 0; i < arr1.length; i++) {
  // A和A1,A2比较
  if (temp === arr1[i].charAt(0)) {
    res.push(arr1[i])
  } else {
    // A和B1比较
    res.push(temp)
    res.push(arr1[i])
    temp = arr2[++j]
  }

  // 最后一次循环把arr2最后一个元素放入
  if(i===arr1.length-1){
    res.push(temp)
  } 
}
console.log(res)
