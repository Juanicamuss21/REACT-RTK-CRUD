import './App.css';
import { Routes, Route } from 'react-router-dom';
import { TasksForm } from './components/TasksForm';
import { TasksList } from './components/TasksList';

function App() {
  return (
    <div className='bg-zinc-900 h-screen text-white'>
      <div className='flex justify-center items-center h-full'>
        <Routes>

          <Route exact path="/" element={<TasksList/>} />
          <Route exact path="/create-task" element={<TasksForm/>} />
          <Route exact path="/update-task/:id" element={<TasksForm/>} />

        </Routes>

      </div>

    </div>
  );
}

export default App;

