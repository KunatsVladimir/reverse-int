module.exports = function reverse (n) {
  let str = n.toString();
  let arr = str.split('');
  let rev = arr.reverse();
  let newStr = rev.join('');
  return parseFloat(newStr);
}