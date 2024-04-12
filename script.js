// linked lists count indexes like arrays: 0, 1, 2, etc.

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null; // set Head to null by default (means list is empty if there's no head node)
        this.size = 0; // size is 0 when it's empty
    }

    printList(){
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // create methods inside the class to call outside, to get information regarding the Linked List Nodes


    // append(data) - add to end of list (DONE)
    appendNode(data) {
        let node = new Node(data); // create new node with only (data) passed in (which means its 'next' will equal null (which we want, for the end))
        let current;

        if(this.head == null){
            this.head = node; // if there's no head, create new Node at the head
        } else {
            current = this.head; // set current to the head node, to start from beginning
            
            while(current.next) {
                current = current.next; // while something exists, keep going
            }
            current.next = node; // once it reaches the end, add new node
        }
        this.size++; // increase size for new addition
    }

    // prepend(data) - add to start of list (DONE)
    prependNode(data) {
        this.head = new Node(data, this.head) // if nothing exists, it sets the Node to whatever data is input, and the next is 'null'

        // if a Head node already exists, that means this.head is a Node object (so we're passing in an actual object as the 'next' property for the new Node object we're prepending to the start). The old Head Node now becomes the 'next' property for the new Node we're adding to the start

        // "Head: Node 200, Next: Node 100, Next: null"

        // As we add more Nodes, they'll just keep making the current Head Node object their 'next' property (since this is simply being added to the beginning, the Nodes already have their 'next' properties in correct order and just shuffle down the line)
        this.size++;
    }

    // return the size (DONE)
    logSize(){
        console.log(`Size of list is: ${this.size}`);
    }

    // return the first node (DONE)
    returnFirstNode(){
        let current = this.head;
        console.log(current.data);
    }

    // return the last node (DONE)
    returnLastNode(){
        let current;
        if(this.head == null){
            return;
        } else {
            current = this.head;
            while(current.next) { // while current.next is true (a 'current' that isn't null)
                current = current.next; // assign the next Node to current
            }
       console.log(current.data); // once there is no more current.next (so next == null), log our final current's (last item) data
     }
    }

    // at(index) - return Node at given (index) (DONE)
    getAtIndex(index) {
    let current = this.head; // start from beginning
    let count = 0; // LL's count like arrays, start at 0

        while(current){ // 'while there is something in current'
            if(count == index){ // if count == index, log our index Node
                console.log(current.data);
            }
        count++; // if count isn't equal to index, increase count
        current = current.next; // set to the next Node, try again
        }

    return;
    }

    // pop - remove last element from list (DONE)
    removeLastNode(){
        let secondLast;
        if(this.head == null){
            return;
        } else {
            secondLast = this.head;
            while(secondLast.next.next != null){ // as long as the NEXT next isn't null, keep going
                secondLast = secondLast.next;
            }
            secondLast.next = null;
        }
        this.size--;
    }

    // contains(data) - returns true if the passed in data is in the list, otherwise false (DONE)
    listContains(data){
        let current = this.head; // assign first Node to current
        if(data == null){
            return;
        }

        while(current.data){ // while the currently selected Node has data
            if(current.data == data){ // if Node's data = data, log the count number (the index)
                console.log(true)
                return;
            } else { // if Node's data != data
                current = current.next; // change 'current' to the next Node
                if(current.next == null && current.data != data){ // if we've reached the end and the end's data does not equal data, it doesn't exist
                    console.log(false);
                    return;
                }
            }
        }

    }

    // find(data) - returns the index of the node containing data, or null if not found (DONE)
    findList(data){
        let current = this.head; // assign first Node to current
        let count = 0; // start count at 0 (as first Node would be 0 spot)
        if(data == null){
            return;
        }

        while(current.data){ // while the currently selected Node has data
            if(current.data == data){ // if Node's data = data, log the count number (the index)
                console.log(count)
                return;
            } else { // if Node's data != data
                current = current.next; // change 'current' to the next Node
                count++; // increase the count (the index)
            }
        }

    }

    // toString - represent Linked List as strings (DONE)
    printListString(){
        let current = this.head;
        let data = ""; // start as an empty string (that way it's ready to receive multiple inputs)

        while(current){ // 'while there is a Node'
            data += `(${current.data}) -> `; // continously adds the Node's data to 'data', as we specifically initialized data as a string ready for input
            current = current.next;
        }
        
        data += "null"; // when it runs out of data, the final Node can only be the 'null', so it adds this at the end before logging the results
        console.log(data);
        // console.log(JSON.stringify(current));
    }

    // insertAt(data, index) - inserts node with the provided value at the given index (DONE)
    insertAt(data, index) {
        if(index > 0 && index > this.size) {
            return; // if index value given is greater than 0 && > the size of the list, return
        }

        //if index is 0, create new Node at the head
        if(index === 0) {
            this.prependNode(data);
            return;
        }

        const node = new Node(data);
        let current;
        let previous;

        //set current to first
        current = this.head;
        let count = 0;

        while(count < index){
            previous = current; // Node before index
            count++;
            current = current.next; // Node after index
        }

        node.next = current; // new Node's 'next' will now be the value of current, as that's where we want to put it
        previous.next = node;
    }

    // removeAt(index) - remove Node at given index (DONE)
    removeAt(index) {
        if(index > 0 && index > this.size) { // if index is out of range, return
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        if(index == 0){
            this.head = current.next; // setting the head to whatever the 'next' value is
        } else {

            while(count < index) {
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }
        this.size--;
    }
}


const linkedList = new LinkedList(); // create initial list with the Head = null (empty) and a size of 0

linkedList.prependNode(100);
linkedList.prependNode(200);
linkedList.appendNode(300);
linkedList.appendNode(600);
linkedList.insertAt(800, 0);


// linkedList.getAtIndex(4);
// linkedList.returnFirstNode();
// linkedList.returnLastNode();
// linkedList.removeLastNode();
// linkedList.removeAt(2);
// linkedList.findList(600);
linkedList.printListString();
// linkedList.listContains(800);
linkedList.printList();
linkedList.logSize();


console.log(linkedList);