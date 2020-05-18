# Class Activity 
SDV503 Class Activity May 19 2020 

Instructions: 
1.	Write your explanation in the README.md file of your weekly repo.
2.	For each task you will create a .js file to write the code examples with comments provided for each line of code.
3.	An executable code files MUST be provided.
4.	For each explanation in your README.md file you write you MUST provide pseudocode and diagrams.   
5.	For each task you will explain in your own words.
6.	You can research and use any suitable resources you need to complete this activity. Make sure you reference your resources using APA style in the README.md.

Class Activty Description:
1.	Write an introduction of JavaScript Data Structure stores and briefly explain each Data structure store. (Provide with your explanation pseudocodes)  
2.	Explain in details Linked lists:
a.	Introduction to linked lists.
b.	What are the advantages and disadvantages of linked lists.
c.	Provide Real world examples
d.	Provide pseudocodes, diagrams and executable code. (create a js file for executable code)
3.	Explain in details JavaScript Recursion:
a.	Introduction to Recursion.
b.	What are the advantages and disadvantages using JavaScript Recursion?
c.	Which data structure stores you can Recursion algorithm?
d.	 Provide Real world examples
e.	Provide pseudocodes, diagrams and executable code. (create a js file for executable code)

___

## Class Activity Task 1 - Data Structure <br /> 

Data structures are a pivotal feature to frontend Javascript. The three main data structures are Array-like, node and hash function structures. 

Array-like data structure: <br /> 
Array-like data structures splits into 2 types. Stacks and Queues. 
A stack being known as a FILO (First In Last Out) structure and a Queue being known as the FIFO (First In First Out) structure. <br /> 
Queue <br /> 
First In....................................Last In <br /> 
(Head) - (node) - (node) - (Tail) <- (New Node) <br /> 
First Out <br /> 
<- (Head) (New Head) - (node) - (node) - (Tail - New Node) <br /> 

Stacks <br /> 
First In.......................................Last In <br /> 
(Head) - (node) - (node) - (Tail) <- (New Node) <br /> 
Last Out....................................First Out <br /> 
(Head) - (node) - (node) - (Tail) (New Node) -> <br /> 

Nodes <br /> 
As seen in the above diagram there are nodes present. Node data structures are items that can be accessed in a single direction of choosing or accessed in both directions by referecncing one another. 
This can be seen through the node types of Linked Lists, Trees and Graphs. 

Hash <br /> 
The hash function is the last main data structure which uses hash key data referencing. The hash function is primarily used in hash tables for searching and retrieving data. Hash tables are incredibly efficient and are used in most data search programs. <br /> 

Keys | Hash function | Buckets
---|---|---
item1 | -> | 01 - hashNum
item2 | -> | 05 - hashNum
item3 | -> | 02 - hashNum
etc | -> | etc

---

## Class Activity Task 2 - Linked Lists
Linked Lists 

Singly - Linked lists store data in a specific order depending on the direction the list is going (Head to Tail, Tail to Head). 
If it is a doubly linked list it goes in both directions. 

For example 
[HEAD] -> [node[next node]] -> [node[next node (tail)]] -> [tail[null]]

![Linked list Pic](/images/list.png)

Linked lists are really good for storing data in sequential order. In stead of having an index, you have a head, the first node in the list, a tail, the last node in the list and the nodes in between. Each node is linked in one direction. Usually with the attribute of nextNode being the next node in the list. <br />

Creating a linked list is simple. 

The first thing to do would be to create a Node class object. 

```javascript
// Node Object made
class Node {
    constructor(data, next = null){
        // Stored data key
        this.data = data;
        // Next node link
        this.next = next;
    }
}
```

To do this manually you can assign a head of the list with an item using the node constructor

```javascript
let head = new Node("item1");
```

Creating new nodes to add to the list you simply assign an item to head.next

```javascript
head.next = new Node("item2");
```

However to add a third item it would be assigned to head.next.next
```javascript
head.next.next = new Node("item3");
```

So rather than manually typing out .next = new code we can create a new class called linked list that will include functions to add, insert, remove and delete. 

```javascript
class linkedList {
    constructor ()
    { 
        this.head = null; 
        this.size = 0; 
    } 
}
```



---

## Class Activity Task 3 - Recursion

Recursion takes a function and then calls itself until it says otherwise.
Recursion is great when applied to factorials and recursive mathmatical formualas. It is also very good when searching through linked lists and trees. 

