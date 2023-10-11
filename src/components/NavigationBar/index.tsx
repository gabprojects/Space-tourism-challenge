import styles from './NavigationBar.module.scss'
import hamburger from '../../assets/shared/icon-hamburger.svg'
import close from '../../assets/shared/icon-close.svg'
import NavigationButtons from '../../components/NavigationButtons'
import Menu from './Menu/Index'
import Logo from './Logo'

export default function NavigationBar() {

    return (
        <header>
            <nav className={styles.NavigationBar}>
                <Logo link="/"></Logo>
                <div className={styles.NavLine}></div>
                <div className={styles.NavButtons}>
                    <NavigationButtons number='00' text='HOME' link="/"></NavigationButtons>
                    <NavigationButtons number='01' text='DESTINATION' link="/destination"></NavigationButtons>
                    <NavigationButtons number='02' text='CREW' link="/crew"></NavigationButtons>
                    <NavigationButtons number='03' text='TECHNOLOGY' link="/technology"></NavigationButtons>
                </div>
                <Menu icon1={hamburger} icon2={close}></Menu>
            </nav>
        </header>
    )
}