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

 module.exports = bubbleSort;