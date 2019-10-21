export class Stack {
  constructor () {
    this.data = []
    this.top = 0 // 栈顶元素索引，栈顶指针指向栈顶元素下一位置
  }

  push (item) {
    this.data.push(item)
    this.top++
  }

  pop () {
    this.top--
    return this.data.pop()
  }

  peek () {
    return this.data[this.top - 1]
  }

  isEmpty () {
    return this.top === 0
  }

  size () {
    return this.top
  }

  clear () {
    this.top = 0
    this.data = []
  }

  print () {
    console.log(this.data.toString())
  }
}
