'use client';

import { useState } from 'react';
import { setNewRSVP /*, getAllRSVP, getRSVPCount */ } from '@/actions';
import Msg from './components/msg';
import CustomInputTwo from './components/input-two';

const formFields = ['fullName', 'mobile'];

const RSVPForm = (): React.JSX.Element => {

    const [submitted, setSubmitted] = useState(false);
    const [formError, setFormError] = useState(false);

    //Individual state errors
    const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
    const [isLoading, setIsLoading] = useState(false);

    const handleForm = async (formData: FormData) => {
        setFormError(false);
        setFieldErrors({});
        setIsLoading(true);
        
        const res = await setNewRSVP(formData);

        if (res.message === 'em branco') {            
            setFormError(true);
            setFieldErrors({
                fullName: 'Nome completo é obrigatório.',
                mobile: 'Número de celular é obrigatório.'                
            });
        } else if (res.message === 'Convidado/Acompanhante já cadastrado') {            
            setFormError(true);
            setFieldErrors({
                fullName: 'Nome já cadastrado.'
            });
        } else if (res.message != null) {
            setFormError(true);
        }
        setSubmitted(true);
        setIsLoading(false);              
    };   
    
    return (
        <>      
            {submitted && !formError
                ? <Msg />
                : <form 
                    action={handleForm} 
                    className="flex flex-col mt-[1.31rem] text-justify items-center px-5"
                    onSubmit={async (e) => {
                        e.preventDefault(); 
                        const formData = new FormData(e.currentTarget);
                        await handleForm(formData);
                    }}
                >
                    <p className='indent-8'>Para garantir a entrada, <span className='font-bold'>CADA CONVIDADO/ACOMPANHANTE</span> deve preencher o formulário abaixo, <span className='font-bold'>SEPARADAMENTE!</span></p>                    
                    <p className='indent-8'>Ainda que o nome esteja na lista (cadastrado pelo formulário) é <span className='font-bold'>INDISPENSÁVEL</span> a apresentação do convite individual na entrada.</p>
                    <div className='flex flex-col lg:flex-row lg:gap-x-20 pt-5'>
                        {formFields.map((field, index) => (
                            <CustomInputTwo
                                key={index}
                                name={field}
                                error={fieldErrors[field]}// Pass the error to CustomInput
                            />                            
                        ))}
                    </div>
                    <button aria-label='Confirmar cadastro de presença' className="text-center rounded-3xl bg-mossGreen w-[16.31rem] h-[3.06rem] my-6" type='submit'>
                        <p>{isLoading ? 'Enviando...' : 'Cadastrar!'}</p>
                    </button>                    
                </form>
            
            }           
        </>
    )
}

export default RSVPForm;