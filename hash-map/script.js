class Node {
    constructor (key = null, value = null, nextNode = null) {
        this.key = key;
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor () {
        this.headNode = null;
    }

    append(key, value) {
        const newNode = new Node(key, value);

        if (!this.headNode) {
            this.headNode = newNode;
        } else {
            let current = this.headNode;
            while (current.nextNode !== null) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
    }
}

class HashMap {
    constructor(capacity= 16, loadFactor = 0.75) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.buckets = new Array(this.capacity);
        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    set(key, value) {
        const index = this.hash(key);
        let list = this.buckets[index];

        if (!this.buckets[index]) {
           list = new LinkedList();
           list.append(key, value);
           this.buckets[index] = list;
           this.size++;
           return;
        }

        let current = list.headNode;
        while (current !== null) {
            if(current.key === key) {
                current.value = value;
                return;
            }
            current = current.nextNode;
            }
        list.append(key, value);
        this.size++;
    }

    get(key) {
        const index = this.hash(key);
        let list = this.buckets[index];

        if (!list) {
            return null;
        }

        let current = list.headNode;
        while (current !== null) {
            if(current.key === key) {
                return current.value;
            }
            current = current.nextNode
        }
        return null;
    }

    has(key) {
        const index = this.hash(key);
        let list = this.buckets[index];

        if (!list) {
            return false;
        }

        let current = list.headNode;
        while (current !== null) {
            if(current.key === key) {
                return true;
            }
            current = current.nextNode
        }
        return false;
    }
}

const test = new HashMap();
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'silver')
console.log(test);
