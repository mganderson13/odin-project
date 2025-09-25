class Node {
    constructor(data) {
        this.data= data;
        this.left= null;
        this.right= null;
    }
}

class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    }


    removeRepeats(array) {
    return [...new Set(array)];
    }

    buildTree(array) {
    let sortedArray = this.removeRepeats(array).sort((a, b) => a-b);
    console.log("sortedArray:", sortedArray)
    function sortedArrayToBSTRecur(arr, start, end) {
        if (start > end) return null;
    
        let mid = start + Math.floor((end - start) / 2);
        let root = new Node(arr[mid]);
    
        root.left = sortedArrayToBSTRecur(arr, start, mid - 1);
        root.right = sortedArrayToBSTRecur(arr, mid + 1, end);
    
        return root;
    }
    return sortedArrayToBSTRecur(sortedArray, 0, sortedArray.length-1);
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

    let currentNode = this.root;

    while (true) {
        if (value === currentNode.data)  {
            return;
        }
        if (value < currentNode.data) {
            //second if from chatgpt
            if (currentNode.left === null) {
                currentNode.left = newNode;
                return;
            }
            currentNode = currentNode.left;
            }

        if (value > currentNode.data) {
            if(currentNode.right === null) {
                currentNode.right = newNode;
                return;
            }
            currentNode = currentNode.right
        }
    }

    }

    delete(value) {
       let root = this.root;
       if (root === null) {
        return;
       }

     function getSuccessor(current) {
        current = current.right;
        while (current !== null && current.left !== null) {
            current = current.left;
        }
        return current;
       }

       function deleteItem(root, value) {
       if (value < root.data) {
        root.left = deleteItem(root.left, value);
       } else if (value > root.data) {
        root.right = deleteItem(root.right, value);
       }else {
        if (root.left === null) {
            return root.right;
        }
        if (root.right === null) {
            return root.left;
        }

        let succ = getSuccessor(root) 
        root.data = succ.data;
        root.right = deleteItem(root.right, succ.data);
       }
    return root;
       }
    return deleteItem(root, value);
    }

    find(value) {
        let current = this.root;
        while (current !== null) {
            if (value === current.data) {
                return current;
            }else if (value < current.data) {
                current = current.left;
            }else {
                current = current.right;
            }
        }
        return null;
    }

    levelOrder(callback) {
        if (this.root === null) {
            return;
        }
        const queue = [];
        queue.push(this.root)

        while(queue.length !== 0) {
            let current = queue[0];
            callback(current);
            if(current.left) {
                queue.push(current.left);
            }
            if(current.right) {
                queue.push(current.right)
            }
            queue.shift();
        }
    }
        preOrder(callback) {
            function preOrderRec(node){
            if(node === null) {
                return;
            }
            callback(node);
            preOrderRec(node.left);
            preOrderRec(node.right);
        }
        preOrderRec(this.root);
        }

    getHeight(node) {
    if (node === null) {
        return 0;
    }
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
    }

    isBalanced(root) {
        if (root === null) {
            return true;
        }
        const leftHeight = this.getHeight(root.left);
        const rightHeight = this.getHeight(root.right);
        const heightDiff = Math.abs(leftHeight - rightHeight);
        if (heightDiff > 1) {
            return false;
        }
    return isBalanced(root.left) && isBalanced(root.right);
    }

//end tree func
}

function driver() {
    function createArray() {
        const array = []
        while(array.length < 20) {
            array.push(Math.floor(Math.random))
        }
    }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  };

  const tree = new Tree([3, 6, 1, 3, 7, 9, 24, 65, 45, 7]);
  tree.insert(24);
  console.log(tree.find(10));
  prettyPrint(tree.root);
  tree.levelOrder((node) => {
    console.log(node.data);
    });
console.log("break")
    tree.preOrder((node) => {
    console.log(node.data);
    });
