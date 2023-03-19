import { useContext } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { MultiFormContext } from "../../../context/multi_form_context";
import PersonalInfo from "./personal_info/personal_info";
import Plan from "./plan/plan";
import AddsOns from "./add_ons/add_ons";
import Summary from "./summary/summary";
import styles from "./content.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Email must be valid"),
    phone_number: yup.string().required("Phone number is required"),
}).required();

const renderContent = {
    1: <PersonalInfo />,
    2: <Plan />,
    3: <AddsOns />,
    4: <Summary />
}

function Content() {

    const methods = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            is_yearly: false,
            adds_on: [],
            plan: 1
        }
    });
    const { step, setIsDone } = useContext(MultiFormContext);
    
    const onSubmit = (form_data) => {
        setIsDone(true);
        console.log(form_data);
    }

    return (
        <FormProvider {...methods}>
            <form className={styles._container} onSubmit={methods.handleSubmit(onSubmit)} >
                {renderContent[step]}
            </form>
        </FormProvider>
    )
}

export default Content;