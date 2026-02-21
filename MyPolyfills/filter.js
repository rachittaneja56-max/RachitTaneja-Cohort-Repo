Array.prototype.myFilter = function(callback, thisArg) {
  const result = []; 
  
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
       const isMatch = callback.call(thisArg, this[i],i,this)
       if(isMatch) result.push(this[i])
    }
  }
  
  return result;
};
//example
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.filter(num => num % 2 === 0));
const evens = numbers.myFilter(num => num % 2 === 0);
console.log(evens);