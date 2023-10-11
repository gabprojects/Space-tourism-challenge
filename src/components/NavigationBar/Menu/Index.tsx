import { useState } from "react";
import styles from './Menu.module.scss';
import NavigationButtons from '../../../components/NavigationButtons'
import cn from 'classnames';

interface MenuProps {
    icon1: string;
    icon2: string;
}

const Menu: React.FC<MenuProps> = ({ icon1, icon2 }) => {

    const [icon, setIcon] = useState(icon1);
    const [isVisible, setIsVisible] = useState(false);

    const toggleIcon = () => {
        setIcon(icon === icon1 ? icon2 : icon1);
        setIsVisible(!isVisible);
    }

    // <div className={`${styles.SideMenu} ${isVisible ? styles.SideMenuVisible : ''}`}>
    return (
        <>
            <div className={styles.menuIcon} onClick={toggleIcon}>
                <img src={icon} alt='Ícone do Menu'></img>
            </div>
            <div className={cn(styles.SideMenu, { [styles.SideMenuVisible]: isVisible })}>
                <NavigationButtons number='00' text='HOME' link="/"></NavigationButtons>
                <NavigationButtons number='01' text='DESTINATION' link="/destination"></NavigationButtons>
                <NavigationButtons number='02' text='CREW' link="/crew"></NavigationButtons>
                <NavigationButtons number='03' text='TECHNOLOGY' link="/technology"></NavigationButtons>
            </div>
        </>
    );
};

export default Menu