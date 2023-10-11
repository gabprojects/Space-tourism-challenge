import Title from '../../components/Title'
import Slider2 from './Slider2'
import styles from './Technology.module.scss'
import data from '../../../data.json'
import { useState } from 'react'

export default function Technology() {

    const [position, setPosition] = useState(0)
    const technology = data.technology[position]

    const handleClick1 = () => {
        setPosition(0);
    }
    const handleClick2 = () => {
        setPosition(1);
    }
    const handleClick3 = () => {
        setPosition(2);
    }

    return (
        <main className={styles.main}>
            <div className={styles.Spacing}></div>
            <div className={styles.Title}>
                <Title number='03' text='SPACE LAUNCH 101' />
            </div>
            <div className={styles.ContentContainer}>
                <div className={styles.ImageContainer}>
                    <img className={styles.ImageContainer__img} src={technology.images.landscape} alt={technology.images.alt} />
                    <img className={styles.ImageContainer__desktop} src={technology.images.portrait} alt={technology.images.alt} />
                </div>
                <div className={styles.Slider2}>
                    <Slider2
                        number='1'
                        technology='Launch vehicle'
                        ativo={technology.name}
                        onClick={handleClick1}
                    />
                    <Slider2
                        number='2'
                        technology='Spaceport'
                        ativo={technology.name}
                        onClick={handleClick2}
                    />
                    <Slider2
                        number='3'
                        technology='Space capsule'
                        ativo={technology.name}
                        onClick={handleClick3}
                    />
                </div>
                <div className={styles.InfoContainer}>
                    <p className={styles.Subheading__2}>THE TERMINOLOGY...</p>
                    <p className={styles.Heading__4}>{technology.name}</p>
                    <p className={styles.BodyText}>{technology.description}</p>
                </div>
            </div>
        </main>
    )
}