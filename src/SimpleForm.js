import React, {useState} from "react";
import {Box, TextField, Button} from '@mui/material';

function SimpleForm(){

    const[textInput, setTextInput] = useState('test');

    const handleChange = (event) =>{
        setTextInput(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        alert('A name was submitted : ' + textInput);
    }

    return(
        <Box 
        component='form'
        sx={{'&.MuiTextField-root': {m: 1}, margin: '20px'}} 
        noValidate autoComplete='off' onSubmit={handleSubmit}>
            <div>
                <TextField label='Name' required variant="outlined" value={textInput} onChange={handleChange} />
            </div>
            <div>
                <Button type='submit' variant='contained'>Submit</Button>
            </div>            
        </Box>
    );
}

export default SimpleForm;