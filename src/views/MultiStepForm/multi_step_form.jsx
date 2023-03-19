import MultiFormProvider from "../../context/multi_form_context";
import Formlayout from "../global/form_layout";
import Nav from "./nav/nav";
import Content from "./content/content";
import styles from "./multi_step_form.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
function MultiStepForm() {

    return (
        <MultiFormProvider>
            <div className={styles._container}>
                <Formlayout>
                    <Nav />
                    <Content />
                </Formlayout>
            </div>
        </MultiFormProvider>
    )
}

export default MultiStepForm