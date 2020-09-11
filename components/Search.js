import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Search.module.scss'

export default function Search({ mini }) {
    const [keyword, setKeyword] = useState('')
    
    const handleChange = (e) => {
        setKeyword(e.target.value)
    }

    return (
        <div className={`${styles.container} ${mini ? styles.mini : ''}`}>
            <input type='search' placeholder='Cocktail name' value={keyword} onChange={handleChange} className={`${styles.input}`} />
            <Link scroll={false} href={`/search/${keyword}`}>
                <a className={`${styles.button}`}>Go!</a>
            </Link>
        </div>
    )
}