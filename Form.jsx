// import React from 'react'

// const Form = ({course,trainer,handleChange, handleSubmit}) => {
//     return(
//         <form onSubmit={handleSubmit}>
//             <div className='form-group'>
//                 <label htmlFor='course'>Course</label>
//                 <input type='text' placeholder='course' name='course' id='course' value={course} onChange={handleChange} />
//             </div>
//             <div className='form-group'>
//                 <label htmlFor='trainer'>Trainer</label>
//                 <input type='text' placeholder='trainer' name='trainer' id='trainer' value={trainer} onChange={handleChange}/>
//             </div>
//             <div className='form-group'>
//                 <button id='button'>Submit</button>
//             </div>
//         </form>
//     )
// }

// export default Form

import React from 'react';
//import PropTypes from 'prop-types';

const Form = ({ course, trainer, handleChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor='course'>Course</label>
                <input type='text' placeholder='course' name='course' id='course' value={course} onChange={handleChange} />
            </div>
            <div className='form-group'>
                <label htmlFor='trainer'>Trainer</label>
                <input type='text' placeholder='trainer' name='trainer' id='trainer' value={trainer} onChange={handleChange} />
            </div>
            <div className='form-group'>
                <button id='button'>Submit</button>
            </div>
        </form>
    );
};

// Form.propTypes = {
//     course: PropTypes.string.isRequired,
//     trainer: PropTypes.string.isRequired,
//     handleChange: PropTypes.func.isRequired,
//     handleSubmit: PropTypes.func.isRequired
// };

export default Form;
