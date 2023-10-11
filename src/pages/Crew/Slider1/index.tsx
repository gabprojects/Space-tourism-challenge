import styles from './Slider1.module.scss'
import cn from 'classnames'

interface Slider1Props {
    crew: string;
    ativo: string;
    onClick: () => void;
}

const Slider1 = (props: Slider1Props) => {

    return (
        <div className={cn(styles.Slider1, {[styles.Slider1Active]: props.crew === props.ativo})} onClick={props.onClick}></div>
    )
}

export default Slider1