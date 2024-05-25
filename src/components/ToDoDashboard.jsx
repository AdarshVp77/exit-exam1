// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../todoDashboard.css';
// import Navbar from './Navbar';

// const TodoDashboard = () => {
//   const [todos, setTodos] = useState([]);
//   const [description, setDescription] = useState('');
//   const [filter, setFilter] = useState('all');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = async () => {
//     const res = await axios.get('http://localhost:5000/api/todos');
//     setTodos(res.data);
//   };

//   const addTodo = async () => {
//     if (!description.trim()) {
//       setError('Description cannot be empty.');
//       setTimeout(() => {
//         setError('');
//       }, 2000); 
//       return;
//     }
    
//     const newTodo = {
//       description,
//       completed: false
//     };
//     await axios.post('http://localhost:5000/api/todos', newTodo);
//     fetchTodos();
//     setDescription('');
//     setError(''); 
//   };

//   const deleteTodo = async (id) => {
//     await axios.delete(`http://localhost:5000/api/todos/${id}`);
//     fetchTodos();
//   };

//   const toggleComplete = async (id, completed) => {
//     await axios.put(`http://localhost:5000/api/todos/${id}`, { completed });
//     fetchTodos();
//   };

//   const filteredTodos = todos.filter(todo => {
//     if (filter === 'completed') return todo.completed;
//     if (filter === 'incomplete') return !todo.completed;
//     return true;
//   });

//   const dismissError = () => {
//     setError('');
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="container mt-5">
//         <h1 className="text-center mb-4 text-primary">Todo List</h1>
//         <div className="mb-3 text-center">
//           <input
//             type="text"
//             className="form-control form-control-sm d-inline-block w-50"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Add a new task"
//           />
//           <button
//             className="btn btn-primary btn-sm mt-2 ml-2 add-btn"
//             onClick={addTodo}
//           >
//             Add
//           </button>
//         </div>
//         {error && (
//           <div className="alert alert-danger alert-dismissible fade show text-center" role="alert">
//             {error}
//             <button type="button" className="btn-close" aria-label="Close" onClick={dismissError}></button>
//           </div>
//         )}
//         <div className="mb-3 text-center">
//           <button
//             className={`btn btn-secondary btn-sm me-2 ${filter === 'all' ? 'active-filter' : ''}`}
//             onClick={() => setFilter('all')}
//           >
//             All
//           </button>
//           <button
//             className={`btn btn-secondary btn-sm me-2 ${filter === 'completed' ? 'active-filter' : ''}`}
//             onClick={() => setFilter('completed')}
//           >
//             Completed
//           </button>
//           <button
//             className={`btn btn-secondary btn-sm ${filter === 'incomplete' ? 'active-filter' : ''}`}
//             onClick={() => setFilter('incomplete')}
//           >
//             Incomplete
//           </button>
//         </div>
//         <ul className="list-group">
//           {filteredTodos.map(todo => (
//             <li key={todo._id} className="list-group-item d-flex justify-content-between align-items-center">
//               <div>
//                 <input
//                   type="checkbox"
//                   checked={todo.completed}
//                   onChange={() => toggleComplete(todo._id, !todo.completed)}
//                   className="me-2"
//                 />
//                 {todo.completed ? <del>{todo.description}</del> : todo.description}
//               </div>
//               <button
//                 className="btn btn-danger btn-sm"
//                 onClick={() => deleteTodo(todo._id)}
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//     </div>
//   );
// };

// export default TodoDashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../todoDashboard.css';
import Navbar from './Navbar';

const TodoDashboard = () => {
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState('');
  const [filter, setFilter] = useState('all');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await axios.get('http://localhost:5000/api/todos');
    setTodos(res.data);
  };

  const addTodo = async () => {
    if (!description.trim()) {
      setError('Description cannot be empty.');
      setTimeout(() => {
        setError('');
      }, 2000);
      return;
    }

    const newTodo = {
      description,
      completed: false
    };
    await axios.post('http://localhost:5000/api/todos', newTodo);
    fetchTodos();
    setDescription('');
    setError('');
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    fetchTodos();
  };

  const toggleComplete = async (id, completed) => {
    await axios.put(`http://localhost:5000/api/todos/${id}`, { completed });
    fetchTodos();
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  const dismissError = () => {
    setError('');
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center mb-4 text-primary">Todo List</h1>
        <div className="mb-3 text-center">
          <input
            type="text"
            className="form-control form-control-sm d-inline-block w-50"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add a new task"
          />
          <button
            className="btn btn-primary btn-sm mt-2 ml-2 add-btn"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        {error && (
          <div className="alert alert-danger alert-dismissible fade show text-center" role="alert">
            {error}
            <button type="button" className="btn-close" aria-label="Close" onClick={dismissError}></button>
          </div>
        )}
        <div className="mb-3 text-center">
          <button
            className={`btn btn-secondary btn-sm me-2 ${filter === 'all' ? 'active-filter' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`btn btn-secondary btn-sm me-2 ${filter === 'completed' ? 'active-filter' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
          <button
            className={`btn btn-secondary btn-sm ${filter === 'incomplete' ? 'active-filter' : ''}`}
            onClick={() => setFilter('incomplete')}
          >
            Incomplete
          </button>
        </div>
        <ul className="list-group">
          {filteredTodos.map(todo => (
            <li key={todo._id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo._id, !todo.completed)}
                  className="me-2"
                />
                {/* Use conditional rendering to add the 'text-danger' class when completed */}
                <span className={todo.completed ? 'text-danger' : ''}>
                  {todo.completed ? <del>{todo.description}</del> : todo.description}
                </span>
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTodo(todo._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoDashboard;

