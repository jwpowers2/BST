// binary search of an array

// bubble sort then binary search 
   
  function bubbleSort(arr){
    
    let sorted = [];
  
    while (arr.length > 0){
  
      let min=arr[0];
      let min_index = 0;
  
      for(let i=0; i<arr.length; i++){
        
        if (arr[i] < min){
      
          min = arr[i];
          min_index = i;
        }
      }

      sorted.push(min);
      
      arr.splice(min_index,1);

     
     

   }
   return sorted;
 }


function binarySearchTree(searchParam,arr){

  let sp = searchParam;

  while(arr.length > 0){

    let middle = Math.floor(arr.length/2);
    
    if (sp === arr[middle]){

    	return true;

    } else {

      if (sp < arr[middle]){

        // remove right side of middle
        arr.splice(middle, arr.length - middle);

      } else {

        // remove let side of middle
    	arr.splice(0, middle);
      }

    }

  }

  return false;

}

var to_sort = bubbleSort([1,5,4,7,9,20,534,1056,22,45,283]);

console.log(binarySearchTree(45, to_sort));