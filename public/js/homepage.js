const completeButton = async (event) => {
  event.preventDefault();

  const id = event.target.getAttribute('id');

  const response = await fetch(`/api/todo/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json' // Indicates the content 
     },
    body: JSON.stringify({
      completed: true
    })
  });

  if (response.ok) {
    document.location.replace('/');
  }  else {
    alert('Failed to complete to-do item');
  }

}

const formHandler = async (event) => {
    event.preventDefault();
  
    const task = document.querySelector('#task').value.trim();
    const date_due = document.querySelector('#date').valueAsNumber;
  
    if (task && date_due) {
      const response = await fetch(`/api/todo`, {
        method: 'POST',
        body: JSON.stringify({ task, date_due }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create new to-do item.');
      }
    }
  };
  
  document
    .querySelector('#new-todo-form')
    .addEventListener('submit', formHandler);
  
  document
    .querySelector('.created-to-dos')
    .addEventListener('change', completeButton);