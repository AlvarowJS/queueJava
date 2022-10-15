class Queue {
	constructor(items, limit)
	{
		this.items = items
		this.limit = limit
	}
	// Agrega un elemento al array items pero con limite de 10 elementos en el array
	add(e){
		if((this.items).length < this.limit){
			this.items.push(e)
			return true
		}
		return false
	}

	// Muestra el primer elemento del array
	element(){
		return this.items[0]
	}

	// Inserta un nuevo elemento
	offer1(e){
		this.items.push(e)
		return true
	}

	offer2(e){
		if(this.items.length >= this.limit){
			this.items.length = this.items.length -1
			this.items.push(e)
			return true
		}
		return false
	}
	peek(){
		if(this.items.length == 0){
			return null
		}
		return this.items[0]
	}
	poll(){
		if(this.items.length == 0){
			return null
		}
		let aux = this.items[0]
		this.items.shift()
		return aux
	}
	remove(){
		let aux = this.items[0]
		this.items.shift()
		return aux
	}
	size(){
		return this.items.length
	}
	is_empty(){
		return this.items.length == 0
	}
}
const queue =  new Queue([],10)
queue.add(10)
queue.add(11)
queue.add(12)
queue.add(13)
queue.add(14)
queue.add(15)
queue.add(16)
queue.add(17)
queue.add(18)
queue.add(19)
queue.add(20)

console.log(queue.items) 

console.log(queue.add(21)) //false
console.log(queue.element()) //devuelve el primer elemento
console.log(queue.offer1(22))  //insertara un nuevo elmento al arreglo
console.log(queue.offer2(23)) //cambia el ultimo elmento

console.log(queue.items) 
console.log(queue.peek())	//devuelve el primere elmetno y si no hay elementos en el arreglo mandara un null

console.log(queue.poll())	//Elimina el primer elemento y si no hay elementos en el arreglo mandara un null
console.log(queue.items)

console.log(queue.remove()) //elimina el primer elemento 
console.log(queue.items)

console.log(queue.size())	//devuleve el tamaño del arreglo
console.log(queue.is_empty())	//retorna true si no hay elmento y false si existe al menos un elmento