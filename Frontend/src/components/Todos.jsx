export function Todos({ todos }) {
  
  function handleMarkAsComplete(todoId) {
    fetch("http://localhost:3000/completed", {
      method: "PUT",
      body: JSON.stringify({
        id: todoId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(async function(res) {
      const json = await res.json();
      alert("Todo updated");
    });
  }

  return (
    <div>
      {todos.map(function(todo) {
        return (
          <div key={todo._id}> 
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            
            <button onClick={() => handleMarkAsComplete(todo._id)}>
              {todo.completed == true ? "Completed" : "Mark as complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}