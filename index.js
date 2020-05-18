// Weekly Repo 19/05/2020
// Recursion Practice

function number(num) {
    let total = 1
    for (let n = num; n > 1; n--) {
        total = total * n
    }
    return total
}

console.log(number(4))



// isEmpty()// true or false 

// size() 

// toString() 



// push(element) {

// const node = new Node(element) // {1}

// let current

// if (this.head === null) {

// this.head = node

// } else {

// current = this.head

// while (current.next != null){

// current = current.next

// }

// current.next =node

// }

// this.count++

// }

/* --------------------------------------------------------------------*/

// Linked List Code examples

// Node class to create items for our linked lists
class Node {
    constructor(data, next = null){
        this.data = data,
        this.next = next
    }
}

