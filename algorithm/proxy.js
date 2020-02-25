// 使用Proxy实现观察者模式

// 所有观察者函数都放入set集合中
const queueObservers = new Set()

const observe = fn => queueObservers.add(fn)
const observable = obj => new Proxy(obj, {set})

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver)
  queueObservers.forEach(observer => observer())
  return result
}

const person = observable({
  name: 'lumiere',
  age: 22
})

function print() {
  console.log(`${person.name}, ${person.age}`)
}

observe(print)
person.name = 'l'