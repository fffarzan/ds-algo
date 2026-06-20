class Node {
  constructor() {
    this.isWordCompleted = false;
    this.hashMapChild = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let currentNode = this.root;

    for (let char of word) {
      if (!currentNode.hashMapChild.has(char)) {
        currentNode.hashMapChild.set(char, new Node());
      }

      currentNode = currentNode.hashMapChild.get(char);
    }

    currentNode.isWordCompleted = true;
  }

  search(word) {
    let currentNode = this.root;

    for (let char of word) {
      if (!currentNode.hashMapChild.has(char)) {
        return false;
      }

      currentNode = currentNode.hashMapChild.get(char);
    }

    return currentNode.isWordCompleted;
  }

  startsWith(prefix) {
    let currentNode = this.root;

    for (let char of prefix) {
      if (!currentNode.hashMapChild.has(char)) {
        return false;
      }

      currentNode = currentNode.hashMapChild.get(char);
    }

    return true;
  }
}

const trie = new Trie();
trie.insert("apple");

console.log(trie.root);
console.log("is 'app' exists?", trie.search("app"));
console.log("is 'apple' exists?", trie.search("apple"));
console.log("is 'apl' exists as prefix", trie.startsWith("apl"));
console.log("is 'app' exists as prefix", trie.startsWith("app"));
