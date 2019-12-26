class EventEmitter {
  constructor() {
    this._events = Object.create(null)
    this._defaultMaxListeners = 10
  }

  on(eventName, handler) {
    if (typeof handler !== 'function') {
      throw new TypeError('The listener must be a function!')
    }
    if (!this._events[eventName]) {
      this._events[eventName] = []
    }
    this._events[eventName].push(handler)

    if (this._events[eventName].length === this.getMaxListeners()) {
      console.warn(eventName + '已经达到最大函数监听数量')
    }
  }

  emit(eventName, ...args) {
    let handlers = this._events[eventName]
    if (handlers) {
      for (let i = 0; i < handlers.length; i++) {
        handlers[i](...args)
      }
    }
  }

  off(eventName, handler) {
    let handlers = this._events[eventName]
    this._events[eventName] = handlers && handlers.filter(fn => fn != handler)
  }

  once(eventName, handler) {
    let onceFunc = (...args) => {
      handler.apply(this, args)
      this.off(eventName, onceFunc)
    }
    this.on(eventName, onceFunc)
  }

  removeAllListeners(eventName) {
    this._events[eventName] = []
  }

  setMaxListeners(n) {
    this._count = n
  }

  getMaxListeners = function () {
    return this._count ? this._count : this.defaultMaxListeners
  }
}

EventEmitter.prototype.addListener = EventEmitter.prototype.on
EventEmitter.prototype.removeListener=EventEmitter.prototype.off

let event = new EventEmitter()
event.on('say', function(str) {
  console.log(str)
})
event.addListener('say', function() {
  console.log('end')
})
event.once('testOnce', function(arg1, arg2) {
  console.log(arg1, arg2)
})
event.emit('say', 'hello litte q')
event.emit('testOnce', 'arg1', 'arg2')
event.emit('testOnce', 'arg1', 'arg2')
event.removeAllListeners('say')
event.emit('say', 'hello litte q')


