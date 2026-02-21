Array.prototype.myReducer = function(callback,initialValue){
    let accumulator;
    let startIndex;
    if (arguments.length >= 2){
        accumulator = initialValue;
        startIndex = 0;
    }else {
        accumulator = this[0];
        startIndex = 1;
    }
    for (let i = startIndex; i < this.length; i++) {
      if (Object.keys(this).includes(String(i))) {
          accumulator= callback(accumulator,this[i],i,this)
      }
    }
    return accumulator
}
//example
let arr = [1,2,3]
console.log(arr.reduce((acc,sum)=> acc + sum,0))
console.log(arr.myReducer((acc,sum)=> acc + sum,0))
