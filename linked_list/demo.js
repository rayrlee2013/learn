/**
 * Created by Rayr Lee on 2018-12-29.
 */

class Node {
    constructor(ele) {
        this.value = ele;
        this.next = null;
    }
}

class LList {
    constructor() {
        this.head = new Node('head');
    }
    //查找节点
    find(tarNode) {
        let currNode = this.head;
        while (currNode.value !== tarNode) {
            currNode = currNode.next;
        }
        return currNode;
    }
    //查找当前节点前一个节点
    findPrev(value) {
        let node = this.head;
        if (node.value === value || node.value === null) {
            return null;
        }
        while (node.next.value !== value) {
            node = node.next;
        }
        return node;
    }
    last() {
        let node = this.head;
        while (node.next !== null) {
            node = node.next;
        }
        return node;
    }
    insert(node, pos) {
        let newNode = new Node(node);
        let posNode = pos ? this.find(pos) : this.last();
        //开始调整节点
        newNode.next = posNode.next; //新节点next指向插入位置的节点(即next);
        posNode.next = newNode; //插入位置的节点next指向插入节点;
    }
    append() {
        for (let i = 0; i < arguments.length; i++) {
            this.insert(arguments[i]);
        }
    }
    advance(node, n) {
        for (let i = 1; i <= n; i++) {
            let pNode = this.findPrev(node),
                sNode = this.findPrev(pNode.value),
                iNode = this.find(node);

            if (pNode.value === this.head.value) {
                break;
            }

            pNode.next = iNode.next;
            iNode.next = pNode;
            sNode.next = iNode;
        }
    }
    remove(value) {
        let preNode = this.findPrev(value);
        if (preNode.next !== null) {
            preNode.next = preNode.next.next;
        }
    }
    show() {
        let currNode = this.head;
        while (currNode.next !== null) {
            console.log(currNode.next.value);
            currNode = currNode.next;
        }
    }
}

const cities = new LList();

cities.insert('beijing', 'head');
cities.insert('shanghai', 'beijing');
cities.insert('guangzhou', 'shanghai');
cities.insert('hongkang', 'guangzhou');
cities.insert('xian', 'hongkang');

cities.append('shijiazhuang', 'xiamen', 'taibei', 'guiyang');

cities.insert('kunming', 'xiamen'); //没有位置参数 插入最后一个
//
cities.show();
console.log('----------------');
cities.advance('guiyang', 10);
cities.advance('xiamen', 1);
cities.show();
// // cities.remove('shanghai');
// // console.log('-----');
// // cities.show();
