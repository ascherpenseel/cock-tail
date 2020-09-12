import styles from '../styles/Filters.module.scss'
import Link from 'next/link'

import Switch from './Switch'

const Ingredient = ({ name }) => (
    <Link scroll={false} href={`/filter/${name}`}>
        <a className={styles.ingredient}>{name}</a>
    </Link>
)

export default function Filters() {
    const ingredients = ['Vodka','Gin','rum','strawberry','whiskey','lemon','soda']

    return (
        <div className={styles.container}>
            <div className={styles.alcoholFree}>
                <Switch label='Non-alcoholic'/>
            </div>
            <div className={styles.filterIcon}>
                <img src='../filtrar.svg'/>
            </div>
            <div className={styles.listWrapper}>
                <ul className={styles.list}>
                    {
                        ingredients.map((ingredient, index) => <Ingredient key={index} name={ingredient} />)
                    }
                </ul>
            </div>
        </div>
    )
}