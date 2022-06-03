function Node(data){
    this.data = data
    this.next = null
}

function LinkedList(){
    this.head = null
}

let list = new LinkedList()
console.log(list)

LinkedList.prototype.add = function(data) {
    let node = new Node()
    let current = this.head
    if (!current){
        this.head = node
    }
    while(current.next){
        current = current.next
    }
    current.next
}
console.log(current.next(4));

//******************************* */

