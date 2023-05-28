'use strict';

(function (){
	const form = document.querySelector('#todoForm');
	const todoItemsContainer = document.querySelector('#todoItems');
	const inputs = Array.from(form.querySelectorAll('textarea, input:not([type=reset])'));
	const keyOfData = 'todoListData';

	function createTodoItemTemplate ({title, description}) {
		const wrapper = document.createElement('div');
		wrapper.classList.add('col-4');

		wrapper.innerHTML = `<div class="taskWrapper">
                                <div class="taskHeading">${ title }</div>
                                <div class="taskDescription">${ description }</div>
                             </div>`
		return wrapper;
	}

	function renderTodoItem (domEl) {
		todoItemsContainer.prepend(domEl)
	}

	function getTodoItems () {
		const existingData = JSON.parse(localStorage.getItem(keyOfData));
		if(!existingData) return [];
		return existingData;
	}

	function saveTodoItem (dataToSave) {
		const existingData = getTodoItems();
		const updatedData = [...existingData, dataToSave];
		existingData.push(dataToSave)
		localStorage.setItem(keyOfData, JSON.stringify(existingData))
		return updatedData.slice(-1)[0];
	}
	
	const removeTodoItem = (domEl) => {
		domEl.remove();
	};

	form.addEventListener('submit', (event) =>{
		event.preventDefault();
		event.stopPropagation();

		const data = inputs.reduce((acc, {name, value}) => {
			acc[name] = value;
			return acc;
		}, {})

		const savedData = saveTodoItem(data);

		renderTodoItem(
			createTodoItemTemplate(savedData)
		);
	});
	
	const handleDelete = (event) => {
		const wrapper = event.target.closest('.col-4');
		if (wrapper) {
			removeTodoItem(wrapper);
		}
	};

	const loadedHandler = () => {
		const data = getTodoItems();
		if(!data.length) return;

		data.forEach(todoItem => {
			const template = createTodoItemTemplate(todoItem);
			renderTodoItem(template)
		})
	}
	
	todoItemsContainer.addEventListener('click', handleDelete);
	document.addEventListener('DOMContentLoaded', loadedHandler)

})()

