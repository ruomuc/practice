/**
 * 一个字符串是否包含另一个字符串
 * @param {*} str 
 * @param {*} subStr 
 */
String.prototype.isContain = function (str, subStr) {
  // 为了遍历大于0xFFFF的码点
  const strArr = [...str];
  const subStrArr = [...subStr];
  let isFind = false;
  for (let i = 0; i < strArr.length; i++) {
    const element = strArr[i];
    // 如果当前字符和子串的第一个字符匹配，逐个向后匹配
    if (element === subStrArr[0]) {
      let jc = 0;
      for (let j = 0; j < subStrArr.length; j++) {
        // 如果发现有一个不匹配的，break
        if (strArr[i + j] !== subStrArr[j]) {
          break;
        }
        jc = j;
      }
      if (jc === subStrArr.length - 1) {
        // 说明循环完毕，并且子串在主串中连续匹配
        isFind = true;
      }
    }
  }
  return isFind;
}

const str = 'go@od@go@ogle';
const subStr = 'go@ogle';

console.log(String.prototype.isContain(str,subStr))
