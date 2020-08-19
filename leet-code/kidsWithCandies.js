/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  if (
    candies.length < 2 ||
    candies.length > 100 ||
    candies[0] < 1 ||
    candies[candies.length - 1] > 100 ||
    extraCandies < 1 ||
    extraCandies > 50
  ) {
    return []
  }
  
  let max = 0
  for (const candy of candies) {
    max = Math.max(max, candy)
  }
  for (let index = 0; index < candies.length; index++) {
    candies[index] = candies[index] + extraCandies >= max
  }
  return candies
}

console.log(kidsWithCandies([1, 2, 3, 4, 5], 2))
