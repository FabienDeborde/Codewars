function tribonacci(signature,n){
  for (var i = 0; i < n - 3; i++) {
    var n3 = signature[signature.length - 1];
    var n2 = signature[signature.length - 2];
    var n1 = signature[signature.length - 3];
    signature.push( n3 + n2 + n1);
  }
  return signature.slice(0,n);
}



console.log(tribonacci([1,1,1],10));
console.log(tribonacci([0,0,0],10));
console.log(tribonacci([0,0,1],10));
console.log(tribonacci([1,1,1],1));
console.log(tribonacci([300,200,100],0));
console.log(tribonacci([0.5,0.5,0.5],30));
