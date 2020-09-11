import styles from '../styles/Header.module.scss'
import { useEffect, useState } from 'react'
import Search from './Search'
import Filters from './Filters'
import Link from 'next/link'

export default function Header() {

    const [show, setShow] = useState(false)

    const toggle = () => {
        if (window.scrollY >= window.innerHeight - 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggle)
        return () => {
            window.removeEventListener('scroll', toggle)
        }
    }, [])

    return (
        <div className={`${styles.container} ${show ? '' : styles.hidden}`}>
            <Filters />
            <h1 className={`${styles.logo} font-script`}>
                <Link scroll={false} href='/'>
                    <a>The Cock Tail</a>
                </Link>
            </h1>
            <Search mini />
        </div>
    )
}