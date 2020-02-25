function Byte () {
  getName = function () {
      console.log(1);
  }
  return this;
}
Byte.getName = function () {
  console.log(2);
}
Byte.prototype.getName = function () {
  console.log(3);
}
var getName = function () {
  console.log(4);
}
function getName () {
  console.log(5);
}
Byte.getName();
getName();
Byte().getName();
getName();
new Byte.getName();
new Byte().getName();

// 2 4 1 1 2 3

async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}
console.log('script start');
setTimeout(function() {
  console.log('setTimeout');
}, 0)
async1();
new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(function() {
  console.log('promise2');
});
console.log('script end');
// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
