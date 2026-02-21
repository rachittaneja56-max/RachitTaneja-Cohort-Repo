Array.prototype.myFlat = function(depth = 1) {
  let result = [];
  this.forEach(item => {
    if (Array.isArray(item) && depth > 0) {
      result.push(...item.myFlat(depth - 1));
    } else {
      result.push(item);
    }
  });

  return result;
};

//example
const nested = [1, [2, [3, 4]], 5];
console.log(nested.myFlat(1)); 
console.log(nested.myFlat(2)); 