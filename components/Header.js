import styles from '../styles/Header.module.scss'
import { useEffect, useState } from 'react'
import Search from './Search'

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
            <div>filters</div>
            <h1 className={`${styles.logo} font-script`}>The Cock Tail</h1>
            <Search mini />
        </div>
    )
}