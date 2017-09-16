function longestConsec(strarr, k) {
    // your code
    var newstr = '';
    strarr.map(function(item, index) {
      if(index < k) {
        newstr += item;
      }
    })
    console.log(newstr)
    //return newstr;
}

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2);
