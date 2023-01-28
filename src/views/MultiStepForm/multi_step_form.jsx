import MultiFormProvider from "../../context/multi_form_context";
import Formlayout from "../global/form_layout";
import Nav from "./nav/nav";
import Content from "./content/content";
import styles from "./multi_step_form.module.scss";

function MultiStepForm() {

    function onFormSubmit(e){
        e.preventDefault();
    }

    return (
        <MultiFormProvider>
            <div className={styles.container}>
                <Formlayout>
                    <Nav />
                    <Content />
                </Formlayout>
            </div>
        </MultiFormProvider>
    )
}

export default MultiStepForm