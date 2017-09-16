function accum(s) {
	// your code
  var newS = s
    .split('')
    .reduce(function(acc, item, index) {
      var newStr = item.toUpperCase();
      newStr += item.toLowerCase().repeat(index);
      acc.push(newStr);
      return acc
    }, [])
    .join('-');
  return newS;
}

console.log(accum("ZpglnRxqenU"));
