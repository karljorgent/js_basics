class Task {
	constructor(name, author, isbn){
		this.name = name;
		this.author = author;
		this.isbn = isbn;
	}
	addedToUI(){
		console.log(this.name + ' | ' + this.author + ' | ' + this.isbn + " is added to UÌ")
	}
	addedToLS(){
		console.log(this.name + ' | ' + this.author + ' | ' + this.isbn + " is added to LS")
	}
}