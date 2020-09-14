import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useResponsive } from '../utils/utils'
import styles from '../styles/Search.module.scss'

const searchIcon = '../search.svg'

export default function Search({ mini }) {
    const [keyword, setKeyword] = useState('')
    const router = useRouter()
    const isMobile = useResponsive()
    const [collapsed, setCollapsed] = useState(isMobile)

    const handleChange = (e) => {
        setKeyword(e.target.value)
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            router.push(`/search/${keyword}`)
        }
    }
    const toggle = (e) => {
        if (keyword === '') setCollapsed(prev => !prev)
        else router.push(`/search/${keyword}`)
    }

    return (
        <div className={`
            ${styles.container}
            ${mini ? styles.mini : ''}
            ${collapsed ? styles.collapsed : ''}`}>

            <input type='search'
                name='keyword'
                placeholder='Cocktail name'
                value={keyword}
                onChange={handleChange}
                className={`${styles.input}`}
                onKeyDown={handleKeyDown}
            />

            {mini && isMobile ?
                <img className={styles.icon} src={searchIcon} onClick={toggle} />
                :
                <Link scroll={false} href={`/search/${keyword}`}>
                    <a className={`${styles.button}`}>Go!</a>
                </Link>
            }
        </div>
    )
}