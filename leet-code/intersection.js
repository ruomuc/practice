/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  if (nums1.length === 0 || nums2.length === 0) {
    return []
  }
  const res = []
  const map = new Map()
  for (const item of nums1) {
    map.set(item, 1)
  }

  for (const item of nums2) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
    }
  }

  for (const [k, v] of map) {
    if (v > 1) {
      res.push(k)
    }
  }
  return res
}
