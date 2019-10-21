// 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。

import { Stack } from './stack'

export function stackCheck (pushOrder, popOrder) {
  if (pushOrder.length !== popOrder.length) {
    return false
  }
  // 做一个辅助栈
  const stack = new Stack()
  // 设置入序指针和出序指针
  let push = 0
  let pop = 0
  // 将入栈序列元素一次进入辅助栈
  // 检查辅助栈顶元素和出栈序列栈顶元素是否一致：
  // 元素一致，弹出辅助栈元素，出栈序列指针后移
  // 不一致，则证明不匹配
  while (pop < popOrder.length) {
    for (; push < pushOrder.length && popOrder[pop] !== stack.peek(); push++) {
      stack.push(pushOrder[push])
    }
    // 如果插入完毕但无匹配 则证明不是匹配的序列
    if (popOrder[pop] !== stack.peek()) {
      return false
    }
    // 若一致则辅助栈弹出栈元素
    stack.pop()
    pop++
  }
  return true
}
