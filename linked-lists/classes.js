class Node {
    constructor (value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor () {
        this.headNode = null;
    }

    append(value) {
        const newNode = new Node(value);

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

    prepend(value) {
        const newNode = new Node(value);

        if(!this.headNode) {
            this.headNode = newNode;
        }else {
            newNode.nextNode = this.headNode;
            this.headNode = newNode;
        }
    }

    size() {
        let count = 0
        if (this.headNode) {
          let current = this.headNode;
          while(current !== null) {
          count++;
          current = current.nextNode;
          }
        }
        return count;
    }

    head() {
        if (this.headNode) {
            return this.headNode.value
        } else {
            return null;
        }
    }

    tail() {
        let current;
        if (this.headNode) {
         current = this.headNode;
            while (current.nextNode !== null) {
                current = current.nextNode;
            }
        }
        return current.value;
    }

    atIndex(index) {
        let nodeArray = []
        let current = this.headNode;
        while (current !== null) {
            nodeArray.push(current.value);
            current = current.nextNode;
        }

        return nodeArray[index];
    }

    pop(){
        if (!this.headNode) {
            return }

        if (this.headNode.nextNode === null) {
            this.headNode = null;
            return
        }

        let current = this.headNode;
        //chatGPT gave me .nextNode.nextNode
        while (current.nextNode.nextNode !== null) {
                current = current.nextNode;
        }
        current.nextNode = null;
    }

    contains(value) {
        if (!this.headNode) {
            return }

        let current = this.headNode;
        while (current !== null) {
            if(current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        if (!this.headNode) {
            return; }
        
        let count = 0;
        let current = this.headNode;
        while (current !== null) {
            if (current.value === value) {
                return count;
            }
            //forgot current = current.nextNode
            current = current.nextNode;
            count++
        }
        return null;
    }

    toString() {
        let nodeArray = []
        let current = this.headNode;
        while (current !== null) {
            nodeArray.push(current.value);
            current = current.nextNode;
        }

        return nodeArray.join(" -> ") + " -> null";
    }
}

const list = new LinkedList();
list.append("dog");
list.prepend("cat");
list.append("turtle");
list.append("fish");
console.log(list.find("dog"));
console.log(list.find("jar"));
console.log(list.toString());