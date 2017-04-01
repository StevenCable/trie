/**
 * Create a Class Trie
 * that can work with a trie data structure
 *
 * Instance Methods
 *
 * add( word )
 * @param word  string
 * @returns void
 *
 * exists( word )
 * @param word  string
 * @returns boolean
 *          true if the word exists in the trie, else false
 */
class Trie {
  constructor(word){
    this.root = {children: {}, leaf: false};

  }

  // // need a check word function?
  // checkWord(word){
  //   if(typeof word === "string"){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }
  // // need an iterator function
  // iterator(word){
  //   root.word[0] = {
  //     children:{

  //     }

  //   }
  //check if word
  //go through word checking 1 letter at a time, then recursively call that function with the next letter

  
    add(word, parent=this.root){
  
      if(typeof word === "string"){


        if(!parent.children.hasOwnProperty(word[0])){

          parent.children[word[0]] = { children:{}, leaf: false };
        }
          parent = parent.children[word[0]];

        if(word.length>1){          

          this.add(word.substring(1), parent);

        }
        if(word.length === 1){

          parent.leaf = true;
        }

      }else{
        throw new TypeError('not a word, idiot');
      }
     
    }


    // exists(word){
    //   if(!parent.children.hasOwnProperty(word[0])){
    //     parent.children[word[0]] = { children:{}, leaf: false };
    //   }
    //     parent = parent.children[word[0]];

    //     add(word.substring(1), parent);
    // };


}

module.exports = Trie;