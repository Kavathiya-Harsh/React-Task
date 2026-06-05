import React, { useState } from 'react';

// const FormSubmit = () => {
//   const [name, setName] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();  // Prevents page reload
//     alert(`Form submitted with name: ${name}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input 
//         type="text" 
//         value={name} 
//         onChange={(e) => setName(e.target.value)} 
//         placeholder="Enter your name"
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FormSubmit;

const mouseEvent = () => {
    const [hovered , setHovered] = useState(false);

    const handleEnter = () => setHovered(true);
    const handleLeave = () => setHovered(false);
  return(
    <>
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} style={{ backgroundColor : hovered ? 'lightblue': 'lightgrey'}}> Hover over me!</div>
    <br />
    <p>{hovered ? 'Mouse is over the box':'Mouse is not over the box'}</p>
    </>
  );
}

export default mouseEvent;