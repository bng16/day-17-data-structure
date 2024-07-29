class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.length=0;
    }

    addNode=(data)=>{
        if(this.head===null){
            this.head=new Node(data);
        }else{
            let current=this.head;
            while(current.next!=null){
                current=current.next;
            }
            current.next=new Node(data);
        }
        this.length++;
    }

    
    removeNode = (target) => {
        if (target >= this.length) { 
          console.log("error: not possible, out of range!");
          return;
        }
    
        if (target === 0) { 
          this.head = this.head.next;
        } else {
          let current = this.head;
          let count = 0;
    
          while (current !== null) { 
            if (count + 1 === target) {
              current.next = current.next.next; 
              break; 
            }
            current = current.next;
            count++;
          }
        }
        this.length--; 
      }

    printList=()=>{
        let current=this.head;
        console.log(current.data);
        while(current.next!=null){
            current=current.next;
            console.log(current.data);
        }
    }


}

const ll=new LinkedList();

ll.addNode(1);
ll.addNode(2);
ll.addNode(3);
ll.addNode(4);
ll.addNode(5);
ll.addNode(6);
ll.printList()
ll.removeNode();
console.log('----------------------');
ll.printList()
