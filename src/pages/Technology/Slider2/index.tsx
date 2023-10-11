import styles from './Slide2.module.scss'
import cn from 'classnames'

interface Slider2Props {
    number: string;
    technology: string;
    ativo: string;
    onClick: () => void;
}

const Slider2 = (props: Slider2Props) => {
    return (
        <div className={cn(styles.Slider2Container, { [styles.Slider2Active]: props.technology === props.ativo })} onClick={props.onClick}>
            <span className={styles.Heading__4}>{props.number}</span>
        </div>
    )
}

export default Slider2;