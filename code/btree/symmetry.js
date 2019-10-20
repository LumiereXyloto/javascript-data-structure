// 一棵树否为对称二叉树

export function isSymmetrical (root) {
  if (root) {
    return isSymmetricalTree(root.left, root.right)
  }
  return true
}

function isSymmetricalTree (node1, node2) {
  if (!node1 && !node2) {
    return true
  }
  if (!node1 || !node2) {
    return false
  }
  if (node1.val !== node2.val) {
    return false
  }
  return isSymmetricalTree(node1.left, node2.right) && isSymmetricalTree(node1.right, node2.left)
}
