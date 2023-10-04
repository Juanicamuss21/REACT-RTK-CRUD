import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import { Link } from 'react-router-dom';

export const TasksList = () => {
    const tasks = useSelector(state => state.tasks)

    const dispatch = useDispatch()

    const handleDelete = (id) => {
      dispatch(deleteTask(id))
    }

  return (
    <div className='w-4/6'>
      <header className='py-4 text-center'>
        <h1 className='my-3'>Tasks: {tasks.length}</h1>
        <Link 
        to='create-task'
        className='bg-indigo-600 px-2 py-1 rounded-full text-md'>
          Create Task    
        </Link>
      </header>
       
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        tasks.map(task => {
          return(
            <div className='bg-neutral-800 p-4 rounded-md' key={task.id}>
              <header className='flex justify-between'>
                <h1>{task.title}</h1>
                <div className='flex gap-2'>
                  <Link 
                  to={`update-task/${task.id}`}
                  className='bg-zinc-600 px-2 py-1 text-xs rounded-md'>
                    Edit
                  </Link>
                  <button className='bg-red-500 px-2 py-1 text-xs rounded-md' onClick={() => handleDelete(task.id)}>Delete</button> 
                </div>
              </header> 
              <p>{task.description}</p>
                     
            </div>

          )
        })
      }
      </div>

    </div>
  )
}
