import styles from '../styles/Search.module.scss'

export default function Search({ mini }) {
    return (
        <div className={`${styles.container} ${mini ? styles.mini : ''}`}>
            <input type='search' placeholder='Cocktail name' className={`${styles.input}`} />
            <button className={`${styles.button}`}>Go!</button>
        </div>
    )
}