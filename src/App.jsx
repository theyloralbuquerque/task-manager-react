
import './App.css'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  return (
    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
      <div className='w-[500px]'>
        <h1 className="text-blue-700 text-3xl">Gerenciador de Tarefas</h1>
        <AddTask />
        <Tasks />

      </div>
    </div>
  )
}

export default App;
