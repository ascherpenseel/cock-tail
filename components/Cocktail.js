import styles from '../styles/Cocktail.module.scss'

export default function Cocktail({ cocktail, isLoading, isError }) {
    
    if (isLoading) return <div className={`${styles.isLoading} ${styles.container}`}>Loading...</div>
    if (isError) return <div className={`${styles.isError} ${styles.container}`}>Error loading the data</div>

    return (
        <div className={styles.container}>
        {
            cocktail.strDrink
        }
        </div>
    )
}
