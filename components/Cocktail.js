import styles from '../styles/Cocktail.module.scss'

export default function Cocktail({ cocktail, isLoading, isError }) {
    
    if (isLoading) return <div className={`${styles.isLoading} ${styles.container}`}>Loading...</div>
    if (isError) return <div className={`${styles.isError} ${styles.container}`}>Error loading the data</div>

    const ingredients = [], measures = []
    
    let i = 1
    while (cocktail[`strIngredient${i}`]) {
        ingredients.push(cocktail[`strIngredient${i}`])
        measures.push(cocktail[`strMeasure${i}`])
        i++
    }

    return (
        <div className={styles.container}>
            <img className={styles.img} src={cocktail.strDrinkThumb} />
            <div className={styles.details}>
                <h1 className={`${styles.title} font-script`}>
                    {cocktail.strDrink}
                </h1>
                <div className={styles.features}>
                    <span className={styles.label}>Category</span>
                    <span>{cocktail.strCategory ? cocktail.strCategory : '-'}</span>
                    <span className={styles.label}>Alcoholic</span>
                    <span>{cocktail.strAlcoholic === 'Alcoholic' ? 'Yes' : 'No'}</span>
                    <span className={styles.label}>Glass</span>
                    <span>{cocktail.strGlass ? cocktail.strGlass : '-'}</span>
                </div>
                <div className={styles.ingredients}>
                    {
                        ingredients.map((ingredient, index) => (
                            <React.Fragment key={index}>
                                <div className={styles.ingredient}>{ingredient}</div>
                                <div className={styles.measure}>{measures[index]}</div>
                            </React.Fragment>
                        ))
                    }
                </div>
                <div className={styles.instructions}>
                    {cocktail.strInstructions}
                </div>
            </div>
        </div>
    )
}
