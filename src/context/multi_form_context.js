import { useState, createContext } from "react";

export const MultiFormContext = createContext();

const MultiFormProvider = ({children}) => {

    const [step, setStep] = useState(1);

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
                    prevStep
                }}
        >
            {children}
        </MultiFormContext.Provider>
    )
}

export default MultiFormProvider;