import React, { Fragment } from 'react'

const Todolist = ({items, handleDelete, handleUpdate}) => {
  return (
    <div className='todo'>
      <h2>courses</h2>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Course</th>
                <th>Trainer</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {items.length>0 && items.map(items=>{
                return <Fragment key={items.id}>
                    <tr>
                        <td>{items.id.slice(0,8)}</td>
                        <td>{items.course}</td>
                        <td>{items.trainer}</td>
                        <td>
                          <button className='delete' onClick={()=>handleDelete(items.id)}>Delete</button>
                          <button className='update' onClick={()=>handleUpdate(items.id)}>Update</button>

                        </td>
                    </tr>
                </Fragment>
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Todolist
