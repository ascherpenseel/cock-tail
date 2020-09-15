import styles from '../styles/Keyboard.module.scss'
import Link from 'next/link'
import { useResponsive } from '../utils/utils'

const Letter = ({char, selected}) => (
    <Link scroll={false} href={`/list/${char}`}>
        <a className={`${styles.letter} ${char === selected ? styles.selected : ''}`}>
            {char}
        </a>
    </Link>
)

export default function Keyboard({ letter }) {
    const isMobile = useResponsive()

    if (isMobile) return (
        <div className={styles.container}>
            {
                'abcdefghijklmnopqrstuvwxyz'.split('').map(char => <Letter key={char} char={char} selected={letter}/>)
            }
        </div>
    )

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                {
                    'qwertyuiop'.split('').map(char => <Letter key={char} char={char} selected={letter}/>)
                }
            </div>
            <div className={styles.row}>
                {
                    'asdfghjkl'.split('').map(char => <Letter key={char} char={char} selected={letter}/>)
                }
            </div>
            <div className={styles.row}>
                {
                    'zxcvbnm'.split('').map(char => <Letter key={char} char={char} selected={letter}/>)
                }
            </div>
        </div>
    )
}