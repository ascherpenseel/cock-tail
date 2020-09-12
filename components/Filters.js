import styles from '../styles/Filters.module.scss'
import Link from 'next/link'

import Switch from './Switch'
import { getIngredients } from '../api/api'

const Ingredient = ({ name }) => (
    <Link scroll={false} href={`/filter/${name}`}>
        <a className={styles.ingredient}>{name}</a>
    </Link>
)

export default function Filters({ noSwitch }) {
    const { ingredients, isLoading, isError } = getIngredients()

    if (isLoading) return <div className={styles.container}>Loading...</div>
    if (isError) return <div className={styles.container}>Error</div>

    return (
        <div className={styles.container}>
            <div className={styles.alcoholFree}>
                {
                    !noSwitch && <Switch label='Non-alcoholic'/>
                }
            </div>
            <div className={styles.filterIcon}>
                <img src='../filtrar.svg'/>
            </div>
            <div className={styles.listWrapper}>
                <ul className={styles.list}>
                    {
                        ingredients.map((ingredient, index) => <Ingredient key={index} name={ingredient.strIngredient1} />)
                    }
                </ul>
            </div>
        </div>
    )
}