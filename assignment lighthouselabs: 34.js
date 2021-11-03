const whichSchool  = function (age) {
// Your code in here ...
  if (age < 13 ){
    return "Elementary School"
  } else if (age >= 13 && age <= 17) {
    return "Secondary School"
  } else if (age >= 18){
    return "Lighthouse Labs"
  }
}
console.log(whichSchool(12))


