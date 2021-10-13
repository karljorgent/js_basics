// event elements
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const list = document.querySelector('ul');
const remove = document.querySelector('#remove-all')

list.addEventListener('click', removeTask)
form.addEventListener('submit', addTask);
remove.addEventListener('click', removeAll)

function addTask(e) {
	const li = document.createElement('li');
	
	li.className = 'collection-item';
	li.appendChild(document.createTextNode(taskInput.value));

	const link = document.createElement('a');
	link.className = 'secondary-content';
	link.appendChild(document.createTextNode('X'));
	link.setAttribute('href', '#');

	li.appendChild(link);
	list.appendChild(li);

	addTaskToLS(taskInput.value)
	

	taskInput.value = '';

	e.preventDefault();
}

list.addEventListener('click', removeTask)


function removeTask(e) {
	if(e.target.textContent == 'X'){
		if(confirm('Are you sure about that?')) {
			list.removeChild(e.target.parentNode);

			removeTaskFromLS(e.target.parentElement.firstChild.textContent)
		}
	}
}

function removeAll() { 
	while (list.firstChild) {
		list.removeChild(list.firstChild)
	}
	localStorage.clear()
}

function addTaskToLS(task) {
	let tasks;
	if(localStorage.getItem('tasks') === null){
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'))
	}
	tasks.push(task);
	localStorage.setItem('tasks', JSON.stringify(tasks))
}

function removeTaskFromLS(task) {
	let tasks;
	if(localStorage.getItem('tasks') === null){
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'))
	}
	tasks.forEach(function(tasksElement, tasksIndex){
		if(tasksElement === task){
			tasks.splice(tasksIndex, 1);
		}
	});
	localStorage.setItem('tasks', JSON.stringify(tasks))
}