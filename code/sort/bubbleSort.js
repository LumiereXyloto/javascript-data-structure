// 冒泡排序,大的元素往后冒泡
// 循环数组，依次比较当前元素和下一个元素，如果当前元素更大，向上冒泡,直到没有比他大的，停止冒泡，此轮冒泡结束。
// 每冒泡一次（外层循环一次），下次需要遍历冒泡的数组的长度便可减一。

export function bubbleSort (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }
  return array
}
