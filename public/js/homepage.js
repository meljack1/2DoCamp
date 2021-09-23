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
  