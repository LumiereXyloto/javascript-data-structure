// 插入排序

export function insertSort (arr) {
  // 从第二位开始，默认第一位为有序
  // 每次将左侧序列看为一个有序的序列，每次都将要插入的数字插入到合适的位置。
  // 插入时，从有序序列的最右侧开始比较
  // 若比较的数较大，比较的数后移一位，要插入的数继续向前比较知道找到要插入的位置。
  for (let i = 1; i < arr.length; i++) {
    // 此时要插入的位置
    let target = i
    for (let j = i - 1; j >= 0; j--) {
      // 如果插入的数比比较的数小，那么要插入的数就和比较的数交换位置，并且插入的数继续和前面的数比较
      if (arr[target] < arr[j]) {
        [arr[j], arr[target]] = [arr[target], arr[j]]
        target = j
      } else {
        break
      }
    }
  }
  return arr
}
