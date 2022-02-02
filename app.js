ui = new UI();
ls = new LS();

getTasks()

const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#isbn");
const clearAll = document.querySelector("#clear");
const taskList = document.querySelector('tbody');

clearAll.addEventListener('click', deleteTasks)

taskList.addEventListener('click', deleteTask)

form.addEventListener("submit", addTask);

function addTask(e) {
	const task = new Task(taskInput.value, authorInput.value, isbnInput.value);
	ui.addTask(task);

	ls.addTask(task);

	e.preventDefault();
}

function deleteTask(e) {
	let task = e.target.parentElement.firstChild
	ui.deleteTask(task)
	let taskLS = e.target.parentElement
	console.log(taskLS)
	ls.deleteTask()
}

function deleteTasks(e) {
	let tasks = document.querySelector('ul')
	ui.deleteTasks(tasks)
}

function getTasks(e) {
	tasks = ls.getData('books');
	ui.getTasks(tasks)
}