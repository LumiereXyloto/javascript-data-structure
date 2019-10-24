// 合并有序链表

function ListNode (val) {
  this.val = val
  this.next = null
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

export function mergeList (l1, l2) {
  // 设置莫须有的头结点作为返回链表的头结点
  var prevHead = new ListNode(-1)
  // 利用js对象地址传递的方式动态更新范围链表的尾结点插入操作
  var prevNode = prevHead
  // 临界值
  while (l1 != null && l2 != null) {
    // 每次寻找并仅插入一个尾结点
    if (l1.val <= l2.val) {
      // 插入尾结点
      prevNode.next = l1
      // 更新指针
      l1 = l1.next
    } else {
      // 同上
      prevNode.next = l2
      l2 = l2.next
    }
    // js对象引用传递的特性 prevHead 已经更新成加了当前尾结点
    // prevNode 赋值为 返回链表的尾结点对象地址 && 并不修改原地址 循环往复下 只会更新 原链表对象地址的尾结点元素值
    // 当前 prevNode.next 即相当于 原链表的尾部结点地址 类似 原链表.next.next.....next
    prevNode = prevNode.next
  }
  // 因子问题均有序 剩下不为空结点的链表可以直接追加到 合并好的部分结果链表中
  // 此时的prevNode即为合并好的部分的结果链表的尾结点
  // eslint-disable-next-line no-unneeded-ternary
  prevNode.next = l1 ? l1 : l2
  // 返回哨兵结点的next即为所求
  return prevHead.next
}
