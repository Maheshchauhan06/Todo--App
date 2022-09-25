import React from 'react'
import  './task.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Task = ({text , id , Delete }) => {
  const handleDelete = () => {
    Delete(id);
  }

  return (
    <> <div className='task'> <p> {text} </p> <span> <EditIcon/> <DeleteIcon  onClick={handleDelete} /></span>  </div>
    
    </>
  )
}

export default Task