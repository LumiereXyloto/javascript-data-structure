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
    if (root) {
      arr.push(root.val)
      this.preOrderTraversal(root.left, arr)
      this.preOrderTraversal(root.right, arr)
    }
    return arr
  }

  // 中序遍历递归
  inOrderTraversal (root, arr) {
    if (root) {
      this.inOrderTraversal(root.left, arr)
      arr.push(root.val)
      this.inOrderTraversal(root.right, arr)
    }
    return arr
  }

  // 后序遍历递归
  postOrderTraversal (root, arr) {
    if (root) {
      this.postOrderTraversal(root.left, arr)
      this.postOrderTraversal(root.right, arr)
      arr.push(root.val)
    }
    return arr
  }

  // 计算二叉树的最大深度
  treeDepth (root) {
    // 一个二叉树的深度为 左子树深度和右子树深度的最大值 + 1
    let depth = (root === undefined || root.value === null) ? 0 : Math.max(this.treeDepth(root.left), this.treeDepth(root.right)) + 1
    return depth
  }

  // 计算二叉树的最小深度（注意要到达叶子节点）
  minDepth (root) {
    if (!root) {
      return 0
    }
    if (!root.left) {
      return 1 + this.minDepth(root.right)
    }
    if (!root.right) {
      return 1 + this.minDepth(root.left)
    }
    return Math.min(this.minDepth(root.left), this.minDepth(root.right)) + 1
  }

  // 判断二叉树是否为平衡二叉树
  // 平衡二叉树子树深度只差不超过1
  isBalanced (root) {
    // 空树平衡
    if (!root) {
      return true
    }
    // 非空树
    let left = this.isBalanced(root.left)
    let right = this.isBalanced(root.right)
    // 如果左子树不平衡或者右子树不平衡或者深度之差大于1，三种情况都不平衡
    if (left === false || right === false || Math.abs(this.treeDepth(root.left), this.treeDepth(root.right)) > 1) {
      return false
    }
    return true
  }

  // 二叉树层次遍历
  // 使用队列存放每一层的节点, 然后在循环中记录值, 并且把子节点添加进去
  // 外循环负责遍历层级结构, 内循环负责遍历每一层的子节点
  leverTraversal (root) {
    if (!root) {
      return []
    }
    // 使用 queue 来存储当前层级的节点
    let result = []
    let queue = [root]
    while (queue.length) {
      let levelSize = queue.length
      let currentLevel = []
      while (levelSize--) {
        let node = queue.shift()
        currentLevel.push(node.val)
        if (node.left && node.left.val !== null) queue.push(node.left)
        if (node.right && node.right.val !== null) queue.push(node.right)
      }
      result.push(currentLevel)
    }
    return result
  }
}
