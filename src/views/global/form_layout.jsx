import styles from "./form_layout.module.scss";

function Nav({children}){
    return (
        <div className={styles.nav}>
            {children}
        </div>
    )
}

function Content({children}){
    return (
        <div className={styles.content}>
            {children}
        </div>
    )
}

function Container({children}){
    return (
        <form className={styles.container}>
            {children}
        </form>
    )
}

function Formlayout({children}) {

    const [nav, content] = children;

    return (
        <Container>
            <Nav>
                {nav}
            </Nav>
            <Content>
                {content}
            </Content>
        </Container>
    )
}

export default Formlayout;