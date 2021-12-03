import React, {useState} from 'react';

import './LogIn.css';

export default function LogIn(){

    const[values, setValue] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const[submitted, setSubmitted] = useState(false);
    const[showSuccess, setValid] = useState(false);

    const handleFirstInput = (event) =>{
        setValue((values) => ({
            ...values, 
            firstName: event.target.value
        }));
    };

    const handleSecondInput = (event) =>{
        setValue((values) => ({
            ...values, 
            lastName: event.target.value
        }));
    };

    const handleThirdInput = (event) =>{
        setValue((values) => ({
            ...values, 
            email: event.target.value
        }));
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(values.firstName && values.lastName && values.email){
            setValid(true);
        }

        setSubmitted(true);
    }


return(
    <div className='formContainer'>
        <form className='logInForm' onSubmit={handleSubmit}>
            {showSuccess && <div className='successMessage'>Successful Log In</div>}
            <input className='formField' type='text' placeholder='First Name' value={values.firstName} disabled={showSuccess} onChange={handleFirstInput} />    
            {submitted && !values.firstName && <span>Please enter first name</span>}
            <input className='formField' type='text' placeholder='Last Name' value={values.lastName} disabled={showSuccess} onChange={handleSecondInput}/>    
            {submitted && !values.lastName && <span>Please enter first name</span>}
            <input className='formField' type='text' placeholder='Email' value={values.email} disabled={showSuccess} onChange={handleThirdInput}/>
            {submitted && !values.email && <span>Please enter first name</span>}
            <button className='formField' type='submit'>Log In</button>    
        </form>
    </div>
);

}