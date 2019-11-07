// 一趟排序将要排序的数据分割成独立的两部分，之后递归排序分割出的两部分，完成排序。
// 单独开辟两个存储空间，左边存放比中介值小的，右边存放比中介值大的

export function QuickSort (array) {
  // 递归的终点判断
  if (array.length < 2) {
    return array
  }
  // 快排的中介值
  let target = array[0]
  // 小于中介值的数组
  let left = []
  // 大于中介值的数组
  let right = []
  for (let i = 1; i < array.length; i++) {
    if (array[i] < target) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return QuickSort(left).concat([target], QuickSort(right))
}
