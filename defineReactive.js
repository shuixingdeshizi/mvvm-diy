function defineReactive (obj, key, val) {
  var dep = new dep()
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    set: function reactiveSetter (newVal) {
      if (newVal === val) return
      dep.notify()
      val = newVal
    },
    get: function reactiveGetter () {
      dep.addSub(Dep.target)
      return val
    }
  })
}

export {
  defineReactive
}