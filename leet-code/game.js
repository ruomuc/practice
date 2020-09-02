/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function (guess, answer) {
  let count = 0
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === answer[i]) {
      count++
    }
  }
  return count
}

var game = function (guess, answer) {
  return (
    (guess[0] === answer[0]) +
    (guess[1] === answer[1]) +
    (guess[2] === answer[2])
  )
}
