/**
 * 堆的底层是一课完全二叉树
 * 最大堆：每个节点的元素值不小于其子节点
 * 最小堆：每个节点的元素值不大于其子节点
 */

export class Heap {
  constructor (type) {
    this.type = type
    this.value = []
  }

  create (numbers) {
    this.value = numbers
    const length = this.value.length
    // 从第一个非叶子节点开始调整结构
    for (let i = Math.floor((length / 2) - 1); i >= 0; i--) {
      this.adjust(i, length)
    }
  }

  adjust (index, length) {
    const array = this.value
    for (let i = 2 * index + 1; i < length; i = 2 * i + 1) {
      if (i + 1 < length) {
        // 如果符合堆的规则
        if ((this.type === 'max' && array[i + 1] > array[i]) || (this.type === 'min' && array[i + 1] < array[i])) {
          i++
        }
      }
      // 如果不符合规则 则进行交换
      if ((this.type === 'max' && array[index] < array[i]) || (this.type === 'min' && array[index] > array[i])) {
        [array[index], array[i]] = [array[i], array[index]]
        index = i
      }
    }
  }
}
