function sortByLength (array) {
  return array.sort(function(a, b){
    return a.length - b.length;
  })
};


console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]));
