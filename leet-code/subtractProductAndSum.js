
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let add = 0
  let mult = 1
  while (n > 0) {
    add += n%10
    mult *= n%10
    n = parseInt(n /10)
  }
  return mult - add
}

console.log(subtractProductAndSum(1234))