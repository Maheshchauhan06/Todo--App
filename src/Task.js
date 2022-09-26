import React from 'react'
import  './task.css'
import DeleteIcon from '@mui/icons-material/Delete';

const Task = ({text , id , Delete }) => {
  const handleDelete = () => {
    Delete(id);
  }

  return (
    <> <div className='task'> <p> {text} </p> <span>  <DeleteIcon  onClick={handleDelete} /></span>  </div>
    
    </>
  )
}

export default Task