// 以下题目可以用es6语法，不需考虑兼容性，不能借助任何库实现，确认提交前，请自行在chrome inspect中测试、验证

//评测题目: 1-随机字符串生成
/*
实现一个随机符串生成函数 randomStr()，要求如下：
1. 生成的随机的字符串应该以字母开头，并包含 [a-z][0-9] 这些字符。
2. 生成的字符串长度为 8。
3. 生成的字符串不能够在程序运行的生命周期中存在重复的情形。

可以用外部变量
*/
let str1 = 'abcdefghijklmnopqrstuvwxyz'
let str2 = str1 + '0123456789'
let arr1 = str1.split('')
let arr2 = str2.split('')
let obj = {}
function getRandomStr () {
  var head = arr1[Math.floor(Math.random()*(arr1.length+1))]
  var single = arr2[Math.floor(Math.random()*(arr2.length+1))]
  for (let i = 0; i < 6; i++) {
    head += single
  }
  obj[head] = head
  return obj[head] ? getRandomStr() : head
}

setInterval(() => {
  console.log(getRandomStr())
}, 10000);

//评测题目: 2-比较版本号
/*
实现一个方法，用于比较两个版本号（version1、version2）
如果version1 > version2，返回1；
如果version1 < version2，返回-1，其他情况返回0。
版本号规则`x.y.z`，xyz均为大于等于0的整数，至少有x位

输入：compareVersion('0.1', '1.1.1')
输出：-1

输入：compareVersion('13.37', '1.2 ')
输出：1

输入：compareVersion('1.1', '1.1.0')
输出：0
*/


//评测题目: 3-日志上报
/*
现在有一个基于 http 的前端日志采集系统，为了优化性能，我们需要把较密集的单次上报日志的行为，
改成合并掉 100ms 时间窗口内的单次上报为批量上报。
假设现有的单次上报的函数如下，请改写此函数的实现，不能使用任何库：

假设现有的单次上报的函数如下，请改写此函数的实现，不能使用任何库：
const uploadLog = (logStr) => {
  fetch('https://log.xxx.com', {
    method: 'POST',
    body: JSON.stringify([logStr])
  });
}


注意：
1.没有日志上报调用时，不发生 http 请求。
2.无论日志上报调用有多频繁，http 请求间隔"不小于" 100ms

*/