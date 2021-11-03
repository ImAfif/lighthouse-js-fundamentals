const isodd = function(num){
  if (num % 2 === 0){
    return true
  } else {
    return false 
  }
}

console.log("3 is odd: " + isodd(3)); 
console.log("8 is odd: " + isodd(8)); 
console.log(isodd(5))
console.log(isodd(40))