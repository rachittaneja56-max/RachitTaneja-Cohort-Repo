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
const obj = {
  "multiplier" : 2,
}
console.log(
  [1,2].myMap(function(ele){
    return ele * this.multiplier
  }, obj)
)
// function myMap(callback){
//  if(this == null){
//   throw new TypeError("Cannot read property of null or undefined");
// }
// if(!Array.isArray(this))throw new TypeError("Not an array");
// if(typeof callback !== "function"){
//   throw new TypeError("callback must be a function");
// }
//   let result=[]
//   for(let i=0;i<this.length;i++){
//     result.push(callback(this[i],i,this))
//   }
//   return result;
// }
// const obj = {
//   "multiplier" : 2,
// }
// Array.prototype.myMap=myMap;
// let ans=[1,2,3,4].myMap((item)=>{
//   return item*this.multiplier
// })
// console.log(ans);
