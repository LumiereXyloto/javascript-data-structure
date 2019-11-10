// 反向链表

export function exchangeList (head) {
  if (head === null || head.next === null) {
    return head
  }
  head.next = exchangeList(head.next.next)
  head.next.next = head
  return head.next
}
