var capitals = function (word) {
	var arr = [];
  word
    .split('')
    .map((letter, i) => { letter === letter.toUpperCase() && arr.push(i) })
  return arr;
};


console.log(capitals('CodEWaRs'));
