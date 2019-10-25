// 反向链表

export function exchangeList (head) {
  if (head === null || head.next === null) {
    return head
  }
  let next = head.next
  head.next = exchangeList(next.next)
  next.next = head
  return next
}
