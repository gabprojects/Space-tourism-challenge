import styles from './Title.module.scss'

interface TitleProps {
    number: string;
    text: string;
}

const Title = (props: TitleProps) => {
    return (
        <div className={`${styles.TitleContainer} ${styles.NavText}`}>
            <h1 className={styles.TitleNumber}>{props.number}</h1>
            <h1 className={styles.TitleText}>{props.text}</h1>
        </div>
    )
}

export default Title;