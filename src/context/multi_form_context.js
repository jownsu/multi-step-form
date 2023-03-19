import { useState, createContext } from "react";

export const MultiFormContext = createContext();

const MultiFormProvider = ({children}) => {

    const [step, setStep] = useState(1);
    const [is_done, setIsDone] = useState(false);

    const nextStep = () => {
        if(step < 4){
            setStep(prevStep => prevStep + 1);
        }
    }

    const prevStep = () => {
        if(step > 0){
            setStep(prevStep => prevStep - 1);
        }
    }

    return (
        <MultiFormContext.Provider
            value={{
                    step,
                    setStep,
                    nextStep,
                    prevStep,
                    is_done,
                    setIsDone
                }}
        >
            {children}
        </MultiFormContext.Provider>
    )
}

export default MultiFormProvider;