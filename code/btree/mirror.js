/**
 * 使一个二叉树变化为他的镜像
 * 即交换左右节点位置
 */
function Mirror (root) {
  if (root) {
    let temp = root.right
    root.right = root.left
    root.left = temp
    Mirror(root.right)
    Mirror(root.left)
  }
}

export default Mirror
