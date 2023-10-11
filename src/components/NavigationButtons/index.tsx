import styles from './NavigationButtons.module.scss'
import { useNavigate, useLocation } from 'react-router-dom'
import cn from 'classnames'

interface ButtonProps {
    number: string;
    text: string;
    link: string;
}

const NavigationButtons = (props: ButtonProps) => {

    const navigate = useNavigate();
    const handleClick = () => navigate(props.link);
    const location = useLocation();

    /*<div className={`${styles.NavContainer} ${location.pathname === props.link ? styles.NavContainerActive : ''}`}  onClick={handleClick}>*/
    return (
        <div className={cn(styles.NavContainer, { [styles.NavContainerActive]: location.pathname === props.link })} onClick={handleClick}>
            <p className={styles.NavText}>
                <span className={styles.NavNumber}>{props.number} </span>
                <span>{props.text}</span>
            </p>
        </div>
    );
};

export default NavigationButtons