/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  let newAddress = ''
  for (let i = 0; i < address.length; i++) {
    if (address[i] === '.') {
      newAddress += '[.]'
    } else {
      newAddress += address[i]
    }
  }
  return newAddress
}

var defangIPaddr = function (address) {
  const reg = new RegExp('\\.','g')
  return address.replace(reg, '[.]',)
}
console.log(defangIPaddr('1.1.1.1'))