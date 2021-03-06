import styles from '../styles/Filters.module.scss'
import Link from 'next/link'
import Switch from './Switch'
import { useState } from 'react'
import { getIngredients } from '../api/api'
import { useResponsive } from '../utils/utils'

const Ingredient = ({ name }) => (
    <Link scroll={false} href={`/filter/${name}`}>
        <a className={styles.ingredient}>{name}</a>
    </Link>
)

function Filters({ noAlcoholicFilter }) {
    const { ingredients, isLoading, isError } = getIngredients()
    const isMobile = useResponsive()
    const [open, setOpen] = useState(false)

    const toggle = () => setOpen(prev => !prev)

    const AlcoholicFilter = () =>
        (<div className={styles.alcoholFree}>
            <Switch label='Non-alcoholic'/>
        </div>)

    if (isLoading) return <div className={styles.container} data-testid='loading'>Loading...</div>
    if (isError) return <div className={styles.container} data-testid='error'>Error</div>

    return (
        <div className={`${styles.container} ${open ? styles.open : ''}`}>
            {!isMobile && !noAlcoholicFilter && <AlcoholicFilter data-testid='switch'/>}
            <div className={styles.filterIcon} onClick={toggle}>
                <img src='../filtrar.svg' />
            </div>
            <div className={`${styles.listWrapper}`}>
                {isMobile && !noAlcoholicFilter && <><p>Filter non-alcoholic drinks</p><AlcoholicFilter /></>}
                <p>See cocktails by ingredient</p>
                <ul className={`${styles.list}`} data-testid='list'>
                    {
                        ingredients.map((ingredient, index) => <Ingredient key={index} name={ingredient.strIngredient1} />)
                    }
                </ul>
            </div>
        </div>
    )
}

export default React.memo(Filters)