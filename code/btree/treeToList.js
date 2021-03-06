// 二叉树展开为链表

export function TreeToList (root) {
  while (root != null) {
    // 如果左子树为 null ，直接考虑右子树
    if (root.left === null) {
      root = root.right
    } else {
      // 寻找左子树最右的节点
      let pre = root.left
      while (pre.right !== null) {
        pre = pre.right
      }
      // 将原来的右子树插入左子树最右边节点的右子树
      pre.right = root.right
      // 将左子树插入到右子树
      root.right = root.left
      root.left = null
      root = root.right
    }
  }
}
