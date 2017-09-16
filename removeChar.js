function removeChar(str){
 //return str.slice(1 , str.length-1)
 // more clever
 return str.slice(1 , -1)
};

console.log(removeChar('eloquent'));
