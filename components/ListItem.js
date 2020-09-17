import styles from '../styles/ListItem.module.scss'
import Link from 'next/link'

function ListItem({ cocktail }) {
    const thumb = cocktail.strDrinkThumb + '/preview'
    const ingredients = []
    
    let i = 1
    while (cocktail[`strIngredient${i}`]) {
        ingredients.push(cocktail[`strIngredient${i}`])
        i++
    }

    return (
        <Link scroll={false} href={{ pathname: '/cocktail/[id]', query: { data: JSON.stringify(cocktail) } }} as={`/cocktail/${cocktail.idDrink}`}>
            <a className={styles.container}>
                <img className={styles.thumb} src={thumb} />
                <p className={styles.name} data-testid="name">{cocktail.strDrink}</p>
                <p className={styles.ingredients} data-testid="ingredients">{ingredients.join(', ')}</p>
            </a>
        </Link>
    )
}

export default React.memo(ListItem)
