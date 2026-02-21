Array.prototype.myForEach = function(callback,thisArg){
      for (let i = 0; i < this.length; i++) {
        if (Object.keys(this).includes(String(i))) callback.call(thisArg,this[i],i,this)
      }
}
// Example
const arr = [1, , 3]; 

arr.myForEach((val, index) => {
  console.log(`Index: ${index}, Value: ${val}`);
});