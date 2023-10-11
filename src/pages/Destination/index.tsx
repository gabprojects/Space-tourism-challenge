import Title from '../../components/Title'
import styles from './Destination.module.scss'
import Tabs from './Tabs'
import data from '../../../data.json'
import { useState } from 'react'

export default function Destination() {
    const [position, setPosition] = useState(0);
    const destination = data.destinations[position];

    const handleClick1 = () => {
        setPosition(0);
    }
    const handleClick2 = () => {
        setPosition(1);
    }
    const handleClick3 = () => {
        setPosition(2);
    }
    const handleClick4 = () => {
        setPosition(3);
    }

    return (
        <main className={styles.main}>
            <div className={styles.Spacing}></div>
            <div className={styles.Title}>
                <Title number='01' text='PICK YOUR DESTINATION' />
            </div>
            <div className={styles.ContentContainer}>
                <div className={styles.ImageContainer}>
                    <img className={styles.ImageContainer__img} src={destination.images.png} alt={destination.images.alt} />
                </div>
                <div className={styles.InfoContainer}>
                    <div className={styles.tabs}>
                        <Tabs
                            text='Moon'
                            ativo={destination.name}
                            onClick={handleClick1}
                        />
                        <Tabs
                            text='Mars'
                            ativo={destination.name}
                            onClick={handleClick2}
                        />
                        <Tabs
                            text='Europa'
                            ativo={destination.name}
                            onClick={handleClick3}
                        />
                        <Tabs
                            text='Titan'
                            ativo={destination.name}
                            onClick={handleClick4}
                        />
                    </div>
                    <h1 className={styles.Heading__1}>{destination.name}</h1>
                    <div className={styles.TextContainer}>
                        <p className={styles.BodyText}>{destination.description}</p>
                    </div>
                    <div className={styles.Bar}></div>
                    <div className={styles.TravelContainer}>
                        <div className={styles.TravelContainer__distance}>
                            <p className={styles.Subheading__2}>AVG. DISTANCE</p>
                            <p className={styles.Subheading__1}>{destination.distance}</p>
                        </div>
                        <div className={styles.TravelContainer__time}>
                            <p className={styles.Subheading__2}>EST. TRAVEL TIME</p>
                            <p className={styles.Subheading__1}>{destination.travel}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}