import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTask, updateTask}  from '../features/tasks/taskSlice'
import { useNavigate, useParams } from 'react-router-dom'

export const TasksForm = () => {

  const [task, setTask] = useState({
    title: '',
    description: ''
  })
  
  const dispatch = useDispatch()
  const params = useParams()
  const navigate = useNavigate()

  const tasks = useSelector(state => state.tasks)

  useEffect(() => {
    if(params.id){
      setTask(tasks.find(task => task.id === params.id))
    }
  }, [params.id, tasks])

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(params.id){
      dispatch(updateTask(task))
    }
    else {
      dispatch(addTask({
        ...task,
        id: crypto.randomUUID()
      }))
    }
    navigate('/')
  }


  return (
    <form className='bg-zinc-800 max-w-sm p-4' onSubmit={handleSubmit}> 
    <label htmlFor='title' className='block text-xs font-bold'> Task: </label> 
    
      <input className='w-full p-2 rounded-md bg-zinc-600 my-2' value={task.title} name='title' type='text' placeholder='title' onChange={handleChange} required/>

      <label htmlFor='title' className='block text-xs font-bold'> Description: </label>

      <textarea className='w-full p-2 rounded-md bg-zinc-600 my-2' value={task.description} name='description' placeholder='description' onChange={handleChange} required/>
      
      <button className='bg-indigo-600 px-2 py-1 rounded-md' type='submit'>Save</button>
      
    </form>
  )
}
