import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Search.module.scss'

export default function Search({ mini }) {
    const [keyword, setKeyword] = useState('')
    const router = useRouter()
    
    const handleChange = (e) => {
        setKeyword(e.target.value)
    }
    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            router.push(`/search/${keyword}`)
        }
    }

    return (
        <div className={`${styles.container} ${mini ? styles.mini : ''}`}>
            <input  type='search' 
                    placeholder='Cocktail name' 
                    value={keyword} 
                    onChange={handleChange} 
                    className={`${styles.input}`}
                    onKeyDown={handleKeyDown} 
            />

            <Link scroll={false} href={`/search/${keyword}`}>
                <a className={`${styles.button}`}>Go!</a>
            </Link>
        </div>
    )
}