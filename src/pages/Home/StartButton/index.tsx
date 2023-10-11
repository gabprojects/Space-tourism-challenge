import styles from './StartButton.module.scss'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate();
    const handleClick = () => navigate('/destination')

    return (
        <div className={styles.StartButton} onClick={handleClick}>
            <p className={styles.Heading__4}>EXPLORE</p>
        </div>
    )
}