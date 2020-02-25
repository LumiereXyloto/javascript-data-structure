// 给定一个JSON 数据，将下划线命名格式的key值转化为驼峰格式的key

function isPlainObject (val) {
  return Object.prototype.toString.call(val) === '[object Object]'
}

function isArray (val) {
  return Object.prototype.toString.call(val) === '[object Array]'
}

const camelizeReg = /_(\w)/g
function camelize (str) {
  return str.replace(camelizeReg, (match) => match.slice(1).toUpperCase())
}

function rename (json) {
  if (isPlainObject(json)) {
    let temp = {}
    Object.keys(json).forEach(key => {
      temp[camelize(key)] = rename(json[key])
    })
    return temp
  } else if (isArray(json)) {
    return json.map(e => rename(e))
  } else {
    return json
  }
}

let test = {
  'a_b': {
    'a_b_a': 'ss',
    'a_b_b': {
      a_b_b_a: '1'
    },
    a_b_c: [{ a_b_c_c: 1 }, [{ a_b_c_c_c_c: 1 }]]
  }
}

console.log(rename(test))
