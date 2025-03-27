'use client'

import { useState } from 'react';
import { setNewRSVP } from '@/actions';
import Msg from './components/msg';
import CustomInput from './components/input';

const formFields = ['fullName', 'mobile'];

const Form = (): React.JSX.Element => {

    const [submitted, setSubmitted] = useState(false);
    const [formError, setFormError] = useState(false);

    const handleForm = async (formData: FormData) => {
        setFormError(false);
        try {
            await setNewRSVP(formData);
        } catch (er) {
            setFormError(true); 
            return;           
        }       
        
        setSubmitted(true);
    };
    
    return (
        <>            
            {submitted && !formError
                ? <Msg />
                : <form className="flex flex-col mt-[1.31rem] items-center">
                    <div className='flex flex-col lg:flex-row lg:gap-x-20 '>
                        {formFields.map((field, index) => (                            
                            <CustomInput key={index} name={field} />                            
                        ))}
                    </div>
                    <button className="text-center rounded-3xl bg-mossGreen w-[16.31rem] h-[3.06rem] my-6">
                        <p>Cadastrar!</p>
                    </button>
                </form>
            }
        </>
    )
}

export default Form;
