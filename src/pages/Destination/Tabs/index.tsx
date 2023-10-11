import styles from './Tabs.module.scss'
import cn from 'classnames'

interface TabsProps {
    text: string;
    ativo: string;
    onClick: () => void;
}

const Tabs = (props: TabsProps) => {

    return(
        <div className={cn(styles.TabsContainer, {[styles.TabsContainerActive]: props.text === props.ativo})} onClick={props.onClick}>
            <span className={styles.NavText}>{props.text}</span>
        </div>
    )
}

export default Tabs