import styles from '../styles/Switch.module.scss'
import { useContext } from 'react'
import { AppContext } from '../context/context'

export default function Switch({ label }) {
    const { nonAlcoholic, setNonAlcoholic } = useContext(AppContext);

    const toggle = () => setNonAlcoholic(prev => !prev)

    return (
        <>
            <div
                className={`${styles.container} ${nonAlcoholic ? styles.active : ''}`}
                onClick={toggle}
                data-testid-active={nonAlcoholic ? 'yes' : 'no'}
                data-testid='link'
            >
                <div className={styles.switch}></div>
            </div>
            <div className={styles.label}>{label}</div>
        </>
    )
}