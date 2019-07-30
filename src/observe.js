import { Dep } from './dep'
import { defineReactive } from './defineReactive'

function observe (data) {
  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key])
  })
}


