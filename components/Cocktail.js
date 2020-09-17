import styles from '../styles/Cocktail.module.scss'

export default function Cocktail({ cocktail, isLoading, isError }) {
    
    if (isLoading) return <div className={`${styles.isLoading} ${styles.container}`} data-testid='loading'>Loading...</div>
    if (isError) return <div className={`${styles.isError} ${styles.container}`} data-testid='error'>Error loading the data</div>

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
                <h1 className={`${styles.title} font-script`} data-testid='name'>
                    {cocktail.strDrink}
                </h1>
                <div className={styles.features}>
                    <span className={styles.label}>Category</span>
                    <span data-testid='category'>{cocktail.strCategory ? cocktail.strCategory : '-'}</span>
                    <span className={styles.label}>Alcoholic</span>
                    <span data-testid='alcoholic'>{cocktail.strAlcoholic === 'Alcoholic' ? 'Yes' : 'No'}</span>
                    <span className={styles.label}>Glass</span>
                    <span data-testid='glass'>{cocktail.strGlass ? cocktail.strGlass : '-'}</span>
                </div>
                <div className={styles.ingredients} data-testid='ingredients'>
                    {
                        ingredients.map((ingredient, index) => (
                            <React.Fragment key={index}>
                                <div className={styles.ingredient}>{ingredient}</div>
                                <div className={styles.measure}>{measures[index]}</div>
                            </React.Fragment>
                        ))
                    }
                </div>
                <div className={styles.instructions} data-testid='instructions'>
                    {cocktail.strInstructions}
                </div>
            </div>
        </div>
    )
}
