import React from 'react'
import  './task.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Task = ({input}) => {
  return (
    <> <div className='task'> <p>hlo moto! {input} </p> <span> <EditIcon/> <DeleteIcon/></span>  </div>
    
    </>
  )
}

export default Task