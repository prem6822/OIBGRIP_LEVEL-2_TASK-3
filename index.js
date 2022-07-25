window.addEventListener('load', function(){
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");
  const list_el_completed = document.querySelector("#completed-tasks");

	form.addEventListener('submit', function(e) {
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');
    task_el.classList.add('p');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');

		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';



		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);
		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', function(e) {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			}else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', function(e) {
      var task = task_el;
      if(task.classList[1]==="p"){
        list_el.removeChild(task_el);
        task.classList.remove("p");
        list_el_completed.appendChild(task);
      }else{
        list_el_completed.removeChild(task_el);
      }
		});

	});

	form.addEventListener('reset', function(e){
		var fChild = list_el.firstElementChild;
		var child = list_el.lastElementChild;
    while (child && fChild != child) {
        list_el.removeChild(child);
        child = list_el.lastElementChild;
    }
		var fChild = list_el_completed.firstElementChild;
		var child = list_el_completed.lastElementChild;
    while (child && fChild != child) {
        list_el_completed.removeChild(child);
        child = list_el_completed.lastElementChild;
    }
	});
});
