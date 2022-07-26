import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  
  const [input, setInput] = useState({
    title:"",
    content:""
  })  

  const [isTrue, setIsTrue] = useState(false)

  function handleChange(event) {

    const {name, value} = event.target;
    setInput((prevValue)=>{
        return ({...prevValue, [name]:value});
    })
    console.log(input);

  } 

  function handleClick(event) {
    event.preventDefault();
    props.add(input)
    setInput({
        title:"",
        content:""
    })
  }
  
  function handleDrop(){
        setIsTrue(true)
  }
  
return (
    <div> 
    <form className='create-note'>
    {
        isTrue && <input name="title" value={input.title} placeholder="Title" onChange={handleChange} />
     }
     <textarea name="content" onClick={handleDrop} value={input.content} placeholder="Take a note..." rows={isTrue ? 3 : 1} onChange={handleChange} />
    <Zoom in={isTrue}>
    <Fab onClick={handleClick} ><AddIcon/></Fab>
    </Zoom>
    </form>
  </div>
  )
}

export default CreateArea;