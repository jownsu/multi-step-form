import { useState, createContext } from "react";

export const MultiFormContext = createContext();

const MultiFormProvider = ({children}) => {

    const [step, setStep] = useState(1);

    return (
        <MultiFormContext.Provider
            value={{
                    step,
                    setStep
                }
            }
        >
            {children}
        </MultiFormContext.Provider>
    )
}

export default MultiFormProvider;