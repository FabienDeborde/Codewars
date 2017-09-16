String.prototype.toJadenCase = function () {
  return this.replace(/(^\w)|(\s\w)/g, function(match){
    return match.toUpperCase();
  });
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
console.log('most Trees Are Blue'.toJadenCase());


// more clever
// String.prototype.toJadenCase = function () {
//   return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
// };
