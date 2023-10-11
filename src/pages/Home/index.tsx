import styles from './Home.module.scss'
import StartButton from './StartButton'

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.Spacing}></div>
            <div className={styles.ContentContainer}>
                <div className={styles.TextContainer}>
                    <p className={styles.NavText}>SO, YOU WANT TO TRAVEL TO</p>
                    <h1 className={styles.Heading__1}>SPACE</h1>
                    <p className={styles.BodyText}>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className={styles.StartButtonContainer}>
                    <StartButton />
                </div>
            </div>
        </main>
    )
}