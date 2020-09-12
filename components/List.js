import styles from '../styles/List.module.scss'
import ListItem from './ListItem'

export default function List({ list, isLoading, isError }) {
    
    if (isLoading) return <div className={`${styles.isLoading} ${styles.container}`}>Loading...</div>
    if (isError) return <div className={`${styles.isError} ${styles.container}`}>Error loading the data</div>

    return (
        <div className={styles.container}>
        {
            list.map(item => <ListItem key={item.idDrink} cocktail={item} />)
        }
        </div>
    )
}
