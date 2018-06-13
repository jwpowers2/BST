// binary search tree 
// tree structure with hierarchical linked leaves

class Leaf {
  
  constructor(val){

    this.left = null;
    this.right = null;
    this.val = val;
  }

}

class BST{

  constructor(){

    this.root = null;

  }

  add(val){

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
  contains(val){
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
  min(){
    let cur = this.root;
    while(cur.left){

      cur = cur.left;
    }
    return cur;
  }
  max(){

    let cur = this.root;
    while(cur.right){
      cur = cur.right;
    }
    return cur;
  }
  size(){

    if leaf === undefined{
      leaf = this.root;
    }
    if (!leaf){
      return 0;
    } else {

      let left = this.size(leaf.left);
      let right = this.size(leaf.right);
    }
    return 1 + left + right;
  }
}

module.exports = BST;