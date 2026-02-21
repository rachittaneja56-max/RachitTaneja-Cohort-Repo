Array.prototype.myMap = function(callback, thisArg) {
  const result = [] 
  
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
       const ele = callback.call(thisArg,this[i],i,this)
       result.push(ele)
    }
  }
  
  return result;
};
//examples
console.log([1,2].myMap((ele)=> ele*2))