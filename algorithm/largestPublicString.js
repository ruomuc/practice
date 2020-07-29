/**
 * 获取两个字符串的最大公共子串
 * @param {*} stra 字符串a
 * @param {*} strb 字符串b
 * @returns {String} 返回一个字符串
 */
String.prototype.largestPublicString = function (stra, strb) {
  // 同样为了处理和遍历码点大于0xffff的字节，先转为数组
  const straArr = [...stra];
  const strbArr = [...strb];

  // 记录最大子串和长度
  let maxStr = '';
  let maxLen = 0;

  for (let i = 0; i < straArr.length; i++) {
    for (let j = 0; j < strbArr.length; j++) {
      // 如果匹配到了一个字节，那么就从这个字节开始向后匹配
      if (straArr[i] === strbArr[j]) {
        // 同步遍历
        for (let m = i, n = j; m < straArr.length && n < strbArr.length; m++, n++) {
          if (straArr[m] !== strbArr[n]) {
            console.log('break', i, j, m, n);
            break;
          }
          // m-i+1是已经匹配了的子串长度
          if (maxLen < m - i + 1) {
            console.log(maxLen, i, m, maxStr);
            maxLen = m - i + 1;
            maxStr = straArr.slice(i, m + 1).join('');
          }
        }
      }
    }
  }
  return maxStr;
}

const stra = 'qwerasdfqwertyu';
const strb = 'qwertyu';

console.log(String.prototype.largestPublicString(stra, strb))