const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("first****************************************")

i = 0;
while (i < ingredients.length){
  console.log(ingredients[i])
  i++
}
// Write a for loop that prints out the contents of ingredients:
console.log("second*************************************")

for (i = 0; i < ingredients.length; i++){
  console.log(ingredients[i])
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("THIRD*************************************************")
for (i = 7; i < ingredients.length; i--){
  if (i === -1){
    break;
  }
  console.log(ingredients[i])
}