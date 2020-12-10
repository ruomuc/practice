/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let five = 0
  let ten = 0

  for (let i = 0, len = bills.length; i < len; i++) {
    const money = bills[i]
    if (money === 5) {
      five++
    } else if (money === 10 && five >= 1) {
      ten++
      five--
    } else if (money === 20) {
      if (five >= 1 && ten >= 1) {
        five--
        ten--
      } else if (five >= 3) {
        five -= 3
      } else {
        return false
      }
    } else {
      return false
    }
  }
  return true
}

console.log(lemonadeChange([5, 10, 20]))
