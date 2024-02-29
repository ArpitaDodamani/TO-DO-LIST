// import React, { useState } from 'react'
// import Form from './forms/Form.jsx'
// import {v1 as uuid} from 'uuid'
// import './global.css'

// const App = () => {

//   let [state, setState]=useState({
//     course:"",
//     trainer:"",
//     id:uuid()
//   })

//   let handleChange = () => {
//     let {name,value} = e.target
//     setState({[name]:value})
//   }

// //   let handleSubmit = (e) => {
// //     e.preventDefault();
// //       let newItem={
// //         id:state.id,
// //         course:state.course,
// //         trainer:state.trainer
// //       }
// //   }

// let handleSubmit = (e) => {
//     e.preventDefault();
//     let newItem = {
//       id: state.id,
//       course: state.course,
//       trainer: state.trainer
//     };
//     // Now you can do something with newItem, like adding it to a list
  
//     setState(prevState => ({
//       ...prevState,
//       // assuming you have a list of items in state, you can add the new item like this:
//       items: [...prevState.items, newItem]
//     }));
//   };
    
//   return (
//     <section id='mainBlock'>
//       <article>
//         <header>
//           <h1>TO-DO-LIST</h1>
//         </header>
//         <main>
//           <Form course={state.course} trainer={state.trainer} handleChange={handleChange} handleSubmit={handleSubmit}/>
//         </main>
//       </article>
//     </section>
//   )
// }

// export default App

import React, { useState } from 'react';
import Form from './components/forms/Form.jsx';
import Todolist from './components/todolist/Todolist.jsx';
import { v1 as uuid } from 'uuid';
import './global.css';
//import Todolist from './components/todolist/Todolist.jsx'

const App = () => {

  let [state, setState] = useState({
    items:[],
    course: "",
    trainer: "",
    id: uuid()
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

//   
let handleSubmit = (e) => {
    e.preventDefault();
    let newItem = {
      id: state.id,
      course: state.course,
      trainer: state.trainer
    };
    // Now you can do something with newItem, like adding it to a list
  
    // Reset form fields
    setState({
      course: "",
      trainer: "",
      id: uuid()
    });
  
    // Example: You can log newItem to the console
    console.log(newItem);
  };
  
  let handleDelete = (id) => {
    let filteredItem = state.items.filter(item=>item.id==id);
    setState({...state,items:filteredItem})
  }

  let handleUpdate =(id) =>{
    let restItems = state.items.filter(item=>item.id!==id)
    let selectedItem = state.items.find(item=>item.id!==id)
    setState({
      ...state,
      items:restItems,
      course: selectedItem.course,
      trainer: selectedItem.trainer
    })
  }
  return (
    <section id='mainBlock'>
      <article>
        <header>
          <h1>TODO-LIST</h1>
        </header>
        <main>
          <Form course={state.course} trainer={state.trainer} handleChange={handleChange} handleSubmit={handleSubmit} />
          <Todolist items={state.items} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
        </main>
      </article>
    </section>
  );
}

export default App;
