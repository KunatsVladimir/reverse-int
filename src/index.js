module.exports = function reverse (n) {
    let string = n.toString();
    let array = string.split('');
    let reverse = array.reverse();
    let newString = reverse.join('');
    return parseFloat(newString);
  }