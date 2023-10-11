import styles from './Logo.module.scss'
import logo from '../../../assets/shared/logo.svg'
import { useNavigate } from 'react-router-dom'

interface LogoProps {
    link: string;
}

const Logo = (props: LogoProps) => {

    const navigate = useNavigate();
    const handleClick = () => navigate(props.link);
    return (
        <div className={styles.NavTopLeft} onClick={handleClick}>
            <img src={logo} className={styles.Logo} alt='Ícone do logo'></img>
        </div>
    )
}

export default Logo