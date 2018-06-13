// binary search of an array

class BinarySearchArray {

  constructor(arr){
    this.arr = arr;
  }

  search(searchParam){

    let sp = searchParam;

    while(this.arr.length > 0){

      let middle = Math.floor(this.arr.length/2);
    
      if (sp === this.arr[middle]){

    	  return true;

      } else {

        if (sp < this.arr[middle]){

          // remove right side of middle
          this.arr.splice(middle, this.arr.length - middle);

        } else {

          // remove let side of middle
    	    this.arr.splice(0, middle);
        }

      }

    }

    return false;

  }
  
}


module.exports = BinarySearchArray;