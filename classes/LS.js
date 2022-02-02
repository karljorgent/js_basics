class LS {
	getData(name){
		let data;
		if(localStorage.getItem("books") === null) {
			data = [];
		} else {
			data = JSON.parse(localStorage.getItem("books"));
		}
		return data
	}

	setData(name, data) {
		localStorage.setItem(name, JSON.stringify(data));
	}

	addTask(task){
		let tasks;
		if(localStorage.getItem("books") === null){
			tasks = [];
		} else {
			tasks = JSON.parse(localStorage.getItem("books"));
		}
		tasks.push(task);

		localStorage.setItem("books", JSON.stringify(tasks));

		task.addedToLS();
	}

	deleteTask(task){
		let tasks = this.getData('books');
		tasks.forEach(function(tasksElement, tasksIndex){
			console.log(tasksElement.isbn)
			if(tasksElement.isbn === task){
				console.log(tasksElement)
				tasks.splice(tasksIndex, 1)
			}
		});
		this.setData('books', tasks)
	}

	deleteTasks(){
		localStorage.clear()
	}
}