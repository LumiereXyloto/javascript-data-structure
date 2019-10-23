export class ListNode {
  constructor (val, next) {
    this.val = val
    this.next = next
  }
}

export class List {
  constructor (arr) {
    if (arr) {
      this.head = new ListNode(arr[0], null)
      let current = this.head
      for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i], null)
        current = current.next
      }
    } else {
      this.head = new ListNode(null, null)
    }
  }

  /**
   * 从 0 开始计算，找到包括head 头节点 在哪的位于 index 位置的节点
   * @param { Number } index
   * @return {ListNode}
   */
  find (index) {
    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }
    return current
  }

  /**
   * 在指定位置插入节点
   * @param {any} value
   * @param {number} index
   */
  insert (value, index) {
    // 获取当前位置前一个节点
    let pre = this.find(index - 1)
    let next = new ListNode(value, pre.next)
    pre.next = next
  }

  /**
   *  删除指定位置的节点
   * @param {number} index
   */
  delete (index) {
    // 如果要删除头结点
    if (index === 0) {
      this.head = this.head.next
    } else if (this.find(index) === null || this.find(index).val === null) {
      throw Error('输入节点不存在！')
    } else {
      // 获取要删除节点的前一个节点
      let pre = this.find(index - 1)
      pre.next = pre.next.next
    }
  }

  // 链表去重
  deleteDuplicates () {
    let current = this.head
    while (current && current.next) {
      if (current.val === current.next.val) {
        current.next = current.next.next
      } else {
        current = current.next
      }
    }
  }

  // 正向遍历链表，返回数组
  positiveTraverse () {
    let arr = []
    let current = this.head
    while (current !== null) {
      arr.push(current.val)
      current = current.next
    }
    return arr
  }

  // 逆向遍历链表，返回数组
  negativeTraverse () {
    let arr = []
    let current = this.head
    while (current) {
      arr.unshift(current.val)
      current = current.next
    }
    return arr
  }
}
