export class CircleQueue {
  constructor (k) {
    this.k = k // 队列长度限制
    this.head = -1 // 头部指针
    this.tail = -1 // 尾部指针
    this.size = 0 // 队列长度
    this.data = new Array(k) // 存储空间
  }
  getHead () {
    return this.size === 0 ? -1 : this.data[this.head]
  }
  getRear () {
    return this.size === 0 ? -1 : this.data[this.rear]
  }
  enQueue (item) {
    if (this.size === this.k) {
      return false
    }
    if (this.tail === this.head && this.tail === -1) {
      this.head++
    }
    // 判断是否尾节点是否是队列最后一个节点，如果是，通过改变为第一个来实现循环
    this.tail = this.tail === this.k - 1 ? 0 : this.tail + 1
    this.size++
    this.data[this.tail] = item
    return true
  }
  deQueue () {
    if (this.size === 0) {
      return false
    }
    delete this.data[this.head]
    // 头节点向后移动
    this.head = this.head === this.k - 1 ? 0 : this.head + 1
    this.size--
    // 如果清空后为空
    if (this.size === 0) {
      this.head = -1
      this.tail = -1
    }
    return true
  }
  isEmpty () {
    return this.size === 0
  }
  isFull () {
    return this.size === this.k
  }
}
