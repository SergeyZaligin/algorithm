/**
 * Вспомогательный класс содержит:
 * value -значение элемента списка и 
 * next - ссылку на следующий элемент
 */
class StackNode {

	constructoor (value) {
		this.value = value;
		this.next = null;
	}

}

/**
 * Класс Stack
 * root - корень 
 * n - кол-во элементов
 */
class Stack {

	constructor () {
		this.root = null;
		this.n = 0;
	}

	isEmpty () {
		return this.n === 0;
	}

	size () {
		return this.n;
	}

	push (value) {
		let oldFirst = this.root;
		this.root = new StackNode(value);
		this.root.next = oldFirst;
		this.n++;
	}

	pop () {
		if (this.isEmpty()) return null;
		let oldFirst = this.root;
		this.root = oldFirst.next;
		this.n--;
		return oldFirst.value;
	}

}

let stackInstance = new Stack();

console.log('Size', stackInstance.size());
console.log('isEmpty', stackInstance.isEmpty());

stackInstance.push(1);
stackInstance.push(2);
stackInstance.push(3);
stackInstance.push(4);
stackInstance.push(5);

console.log('Size', stackInstance.size());
console.log('isEmpty', stackInstance.isEmpty());
console.log('Structure', stackInstance);

console.log('Pop',stackInstance.pop());
console.log('Pop',stackInstance.pop());

console.log('Size', stackInstance.size());
console.log('isEmpty', stackInstance.isEmpty());
console.log('Structure', stackInstance);
