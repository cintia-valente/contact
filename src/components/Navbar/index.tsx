import styles from "./style.module.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.list}> 
                <li className={styles.title}>  
                  Olá, Mundo
                </li>
                <li className={styles.item}><Link to="/">Home</Link></li>
                <li className={styles.item}><Link to="/contact">Contatos</Link></li>  
                <li className={styles.item}><Link to="/user">Usuários</Link></li>  
                <li className={styles.item}><Link to="/">Sair</Link></li>     
            </ul>
        </nav>
    )
}

export default Navbar