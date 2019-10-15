export class Node {
  constructor (val) {
    this.val = val
    this.left = this.right = undefined
  }
}

export class Tree {
  constructor (data) { // data是一个数组
    // 临时存储所有节点，方便寻找父子节点
    let nodeList = []
    for (let i = 0, len = data.length; i < len; i++) {
      let node = new Node(data[i])
      nodeList.push(node)
      if (i > 0) {
        // 计算节点所在层级的指数 即每一层都是 2^n 个  k为层数 k = n + 1
        let n = Math.floor(Math.sqrt(i + 1))
        // 计算当前层的起始点
        let q = Math.pow(2, n) - 1
        // 记录上一层的起始点
        let p = Math.pow(2, n - 1) - 1
        // 找到当前节点的父节点
        let parent = nodeList[p + Math.floor((i - q) / 2)]
        // 将当前节点和上一节点做关联
        if (parent.left !== undefined) {
          parent.right = node
        } else {
          parent.left = node
        }
      }
    }
    this.root = nodeList.unshift()
    nodeList.length = 0
  }

  // 先序遍历递归
  preOrderTraversal (root, arr) {
    arr.push(root.val)
    this.preOrderTraversal(root.left, arr)
    this.preOrderTraversal(root.right, arr)
    return arr
  }

  // 中序遍历递归
  inOrderTraversal (root, arr) {
    this.inOrderTraversal(root.left, arr)
    arr.push(root.val)
    this.inOrderTraversal(root.right, arr)
    return arr
  }

  // 后序遍历递归
  postOrderTraversal (root, arr) {
    this.postOrderTraversal(root.left, arr)
    this.postOrderTraversal(root.right, arr)
    arr.push(root.val)
    return arr
  }

  // 计算二叉树的深度
  treeDepth (root) {
    // 一个二叉树的深度为 左子树深度和右子树深度的最大值 + 1
    let depth = (root === undefined || root.value === null) ? 0 : Math.max(this.treeDepth(root.left), this.treeDepth(root.right)) + 1
    return depth
  }
}
