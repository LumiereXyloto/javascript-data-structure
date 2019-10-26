export class Queue {
  constructor () {
    this.queue = []
  }
  push (item) {
    this.queue.push(item)
  }
  pop () {
    if (this.queue.length === 0) {
      return null
    }
    return this.queue.shift()
  }
  peek () {
    return this.queue[0]
  }
  isEmpty () {
    return this.queue.length === 0
  }
}
