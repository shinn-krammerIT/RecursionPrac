// Data structure examples
// Linked List Code examples

// Node class to create items for our linked lists
class Node {
    constructor(data, next = null){
        this.data = data,
        // Open next value to store "next" node of data
        this.next = next
    }
}


// Manual check for items in linked list
// let head = new Node("item1");

// head.next = new Node("item2");

// head.next.next = new Node("item3");

// let current = head;

// While loop print. 
// while (current !== null) {
//     if (current == head) {
//         console.log("[Head] -> ")
//     }
//     console.log("[Node: " + current.data + " | Next Node] -> ");
//     if (current.next == null) {
//         console.log(null)
//     }
//     current = current.next;
// }


let head = Symbol("head");

class linkedList {
    // List data construction 
    constructor ()
    { 
        // 
        this.head = null; 
        this.size = 0; 
    } 

    add(element) {
        let newNode = new Node(element);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    
    get(index) {
    
        // ensure `index` is a positive value
        if (index > -1) {

            // the pointer to use for traversal
            let current = this.head;

            // used to keep track of where in the list you are
            let i = 0;

            // traverse the list until you reach either the end or the index
            while ((current !== null) && (i < index)) {
                current = current.next;
                i++;          
            }
        
            // return the data if `current` isn't null
            return current !== null ? current.data : undefined;
        } else {
            return undefined;
        }
    }

    remove(index) {
    
        // special cases: empty list or invalid `index`
        if ((this.head === null) || (index < 0)) {
            throw new RangeError(`Index ${index} does not exist in the list.`);
        }
 
        // special case: removing the first node
        if (index === 0) {

            // temporary store the data from the node
            const data = this.head.data;

            // just replace the head with the next node in the list
            this.head = this.head.next;

            // return the data at the previous head of the list
            return data;
        }

        // pointer use to traverse the list
        let current = this.head;

        // keeps track of the node before current in the loop
        let previous = null;

        // used to track how deep into the list you are
        let i = 0;

        // same loops as in `get()`
        while ((current !== null) && (i < index)) {

            // save the value of current
            previous = current;

            // traverse to the next node
            current = current.next;

            // increment the count
            i++;
        }

        // if node was found, remove it
        if (current !== null) {

            // skip over the node to remove
            previous.next = current.next;

            // return the value that was just removed from the list
            return current.data;
        }

        // if node wasn't found, throw an error
        throw new RangeError(`Index ${index} does not exist in the list.`);
    }

    
    *values(){
        
        let current = this.head;

        while (current !== null) {
            yield current.data;
            current = current.next;
        }
    }

    [Symbol.iterator]() {
        return this.values();
    }

}

let list = new linkedList();
list.add("item1")
list.add("item2")
list.add("item4")
console.log(list.get(0))
const arr = [...list];
console.log(arr);


// Linked list Code derived from humanwhocodes.com
// Computer Science in javascript linked list


// Recursion Code

let item = "RECURSION";
let index = 0;
function myRecursiveFunc(str, i) {
    if (i < str.length) {
        console.log(str[i])
        myRecursiveFunc(str,i+1)
    }
}

myRecursiveFunc(item, index)