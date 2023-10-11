import Title from '../../components/Title'
import styles from './Crew.module.scss'
import Slider1 from './Slider1'
import data from '../../../data.json'
import { useState } from 'react'

export default function Crew() {
    const [position, setPosition] = useState(0);
    const crew = data.crew[position];
    const [imageClass, setImageClass] = useState(styles.Image__crew__0);

    const handleClick1 = () => {
        setPosition(0);
        setImageClass(styles.Image__crew__0);
    }
    const handleClick2 = () => {
        setPosition(1);
        setImageClass(styles.Image__crew__1);
    }
    const handleClick3 = () => {
        setPosition(2);
        setImageClass(styles.Image__crew__2);
    }
    const handleClick4 = () => {
        setPosition(3);
        setImageClass(styles.Image__crew__3);
    }

    return (
        <main className={styles.main}>
            <div className={styles.Spacing}></div>
            <div className={styles.Title}>
                <Title number='02' text='MEET YOUR CREW' />
            </div>
            <div className={styles.ContentContainer}>
                <div className={`${styles.ImageContainer} ${imageClass}`}>
                    <img className={styles.ImageContainer__img} src={crew.images.png} alt={crew.images.alt} />
                </div>
                <div className={styles.Bar}></div>
                <div className={styles.OrganizationContainer}>
                    <div className={styles.Slider}>
                        <Slider1
                            crew='Commander'
                            ativo={crew.role}
                            onClick={handleClick1}
                        />
                        <Slider1
                            crew='Mission Specialist'
                            ativo={crew.role}
                            onClick={handleClick2}
                        />
                        <Slider1
                            crew='Pilot'
                            ativo={crew.role}
                            onClick={handleClick3}
                        />
                        <Slider1
                            crew='Flight Engineer'
                            ativo={crew.role}
                            onClick={handleClick4}
                        />
                    </div>
                    <div className={styles.InfoContainer}>
                        <p className={styles.Subheading__1}>{crew.role}</p>
                        <p className={styles.Heading__4}>{crew.name}</p>
                        <p className={styles.BodyText}>{crew.bio}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}