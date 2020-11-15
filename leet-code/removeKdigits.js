/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const len = num.length
  const stack = []
  const remains = len - k
  for (let i = 0; i < len; i++) {
    while (stack.length > 0 && k > 0 && stack[stack.length - 1] > num[i]) {
      stack.pop()
      k--
    }
    stack.push(num[i])
  }
  while(stack[0]==0){
    stack.shift()
  }
  return stack.slice(0, remains).join('') || '0'
}

console.log(removeKdigits('10', 2))
