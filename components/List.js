import styles from '../styles/List.module.scss'
import { useContext } from 'react'
import { AppContext } from '../context/context'
import ListItem from './ListItem'
import Transition from './Transition'

function List({ list, isLoading, isError, noAlcoholicFilter }) {
    
    if (isLoading) return <div className={`${styles.isLoading} ${styles.container}`} data-testid='loading'>Loading...</div>
    if (isError) return <div className={`${styles.isError} ${styles.container}`} data-testid='error'>Error loading the data</div>
    if (!list) return <div className={`${styles.isError} ${styles.container}`} data-testid='no-results'>No cocktails found in this category :(</div>

    const { nonAlcoholic } = useContext(AppContext)
    let filteredList = (nonAlcoholic && !noAlcoholicFilter) ? list.filter(drink => drink.strAlcoholic === 'Non alcoholic') : list

    if (filteredList.length === 0) return <div className={`${styles.noResults} ${styles.container}`} data-testid='no-results'>There are no results to show. Try looking for a different thing or removing the 'Non-alcoholic' filter :)</div>

    return (
        <div className={styles.container} data-testid='container'>
        {
            filteredList.sort((a,b) => (a.strDrink > b.strDrink) ? 1 : ((b.strDrink > a.strDrink) ? -1 : 0)).map(item => 
                <Transition key={item.idDrink} effect='scaleUp' data-testid={item.strDrink}>
                    <ListItem cocktail={item} />
                </Transition>
            )
        }
        </div>
    )
}

export default React.memo(List)