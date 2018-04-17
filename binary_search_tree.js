// binary search tree in JS

function leaf(val){

  this.left = null;
  this.right = null;
  this.val = val;

}
function BST(){
  this.root = null;

  this.add = function(val){

    if(this.root === null){

      this.root = new Leaf(val);
    } else {

      let cur = this.root;
      let notFound = true;
      while(notFound){
        if(val > cur.val){
          if(cur.right){
            cur = cur.right;
          }else{
            cur.right = new Leaf(val);
            notFound = false;
          }
        } else {

          if(cur.left){
            cur = cur.left;
          } else {
            cur.left = new Leaf(val);
            notFound = false;
          }
        }
      }
    return this;
  }
  }
  this.contains = function(val){
    let cur = this.root;
    while(cur){
      if(val > cur.val){
        cur = cur.right;
      } else if(val < cur.val) {
        cur = cur.left;
      } else {
        return true;
      }
    }
    return false;
  }
}
