class LS {
	

	setDaťa(name, data) {
		localStorage.setItem(name, JSON.stringify(data));
	}

	addTask(task){
		let tasks;
		if(localStorage.getItem("tasks") === null){
			tasks = [];
		} else {
			tasks = JSON.parse(localStorage.getItem("tasks"));
		}
		tasks.push(task);

		localStorage.setItem("tasks", JSON.stringify(tasks));

		task.addedToLS();
	}

	deleteTask(task){
		let tasks = this.getData('tasks');
		tasks.forEach(function(tasksElement, tasksIndex){
			if(tasksElement.name === task){
				takss.splice(tasksIndex, 1)
			}
		});
		this.setData('tasks', tasks)
	}

	deleteTasks(){
		localStorage.clear()
	}
}