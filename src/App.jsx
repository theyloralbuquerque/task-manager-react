
import './App.css'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useEffect, useState } from 'react'

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', { 
  //       method: 'GET'
  //     });

  //     const data = await response.json();

  //     setTasks(data);
  //   }

  //   Se quiser você pode chamar uma API para pegar as tarefas
  //   fetchTasks();
  // }, []);

  function onAddTaskClick(title, description) {
    const ultimo_elemento_array = tasks[tasks.length - 1];

    const new_task = {
      id: ultimo_elemento_array.id + 1,
      title, 
      description, 
      is_completed: false
    };

    setTasks([...tasks, new_task]);
  }

  function onTaskClick(task_id) {
    const new_tasks = tasks.map(task => {

      // Preciso atualizar essa tarefa
      if (task.id == task_id) {
        return {...task, is_completed: !task.is_completed};
      }

      // Não preciso atualizar essa tarefa
      return task;
    })

    setTasks(new_tasks)
  }

  function onDeleteTaskClick(task_id) {
    const new_tasks = tasks.filter(task => task.id !== task_id);

    setTasks(new_tasks);
  }

  return (
    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
      <div className='w-[500px] space-y-4'>
        <h1 className="text-slate-100 text-3xl font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTask onAddTaskClick={onAddTaskClick} />
        <Tasks tasks={tasks}  onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  )
}

export default App;
