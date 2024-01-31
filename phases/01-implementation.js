class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.capacity = numBuckets;
    this.data = [ null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null  ];
    this.data.length = numBuckets;
    this.count = 0;
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // nGet index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
   const loadFactor = 0.7;
   if(this.count > loadFactor * this.capacity){
      this.resize();
    }

    const index = this.hashMod(key);
    let node = this.data[index];

      while(node !== null && node.key !== key){
        node = node.next;
      }

      if(node !== null){  //then node.key === key
        node.value = value;
        return;
      }
      else{
        let newKeyValue = new KeyValuePair(key, value);
        newKeyValue.next = this.data[index];
        this.data[index] = newKeyValue;
        this.count++;
      }
  }

  read(key) {
    let index = this.hashMod(key);
    let node = this.data[index];
    while(node !== null){
      if(node.key === key){
        return node.value;
      }
      node = node.next;
    }
    return;
  }


  resize() {
    let ogData = this.data;
    this.capacity *= 2;
    this.count = 0;
    this.data = new Array(this.capacity).fill(null);

    for (let i = 0; i < ogData.length; i++) {
      if (ogData[i] !== null) {
        let node = ogData[i];

        while (node !== null) {
          this.insert(node.key, node.value);
          node = node.next;
        }
      }
    }
  }


  delete(key) {
    let index = this.hashMod(key);
    let prevNode = this.data[index];

    if(this.read(key) === undefined){
      return "Key not found";
    }

    if(prevNode.key === key){     //if it's the first element in linked list
      this.data[index] = prevNode.next;
    }
    else{
      let node = prevNode.next;
      while(node !== null){
        if(node.key === key){
          prevNode.next = node.next;
          break;
        }
        prevNode = node;
        node = node.next;
      }
    }

    this.count--;
  }
}


module.exports = HashTable;
