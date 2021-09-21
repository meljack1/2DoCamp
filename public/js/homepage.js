const formHandler = async (event) => {
    event.preventDefault();
  
    const task = document.querySelector('#task').value.trim();
    const dueDate = document.querySelector('#date').value;
  
    if (task && dueDate) {
      const response = await fetch(`/api/todo`, {
        method: 'POST',
        body: JSON.stringify({ task, dueDate }),
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
  