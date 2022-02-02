class UI {
	addUIelement(book = '', author = '', isbn = '', atributes={}){
		let bookList = document.getElementById('books').getElementsByTagName('tbody')[0];
		let row = bookList.insertRow();
		let cell1 = row.insertCell(0)
		let cell2 = row.insertCell(1)
		let cell3 = row.insertCell(2)
		let cell4 = row.insertCell(3)
		cell1.innerHTML = book
		cell2.innerHTML = author
		cell3.innerHTML = isbn

		const element = document.createElement('a');
		element.className = 'secondary-content';
		element.appendChild(document.createTextNode('X'))
		if(Object.keys(atributes).length > 0){
			for(let key in atributes){
				element.setAttribute(key, atributes[key]);
			}
		}
		cell4.appendChild(element)
	}
	addTask(task) {
		const li = this.addUIelement(taskInput.value, authorInput.value, isbnInput.value, {'href':'#'})

		const inputTitle = document.querySelector("#task");
		inputTitle.value = "";

		const inputAuthor = document.querySelector("#author");
		inputAuthor.value = "";

		const inputISBN = document.querySelector("#isbn");
		inputISBN.value = "";

		task.addedToUI(); 
	}
	deleteTask(task){
		const deleteIcon = task;
		if(deleteIcon.textContent == "X"){
			if(confirm('Do you want to delete this task?')) {
				task.parentElement.parentElement.remove();
			}
		}
	}

	deleteTasks(tasks){
		while(tasks.firstChild){
			tasks.removeChild(tasks.firstChild)
		}
	}

	getTasks(tasks){
		for(let i = 0; i < tasks.length; i++){
		const li = this.addUIelement(tasks[i].name, tasks[i].author, tasks[i].isbn, {'href':'#'})
		}
	}
}
