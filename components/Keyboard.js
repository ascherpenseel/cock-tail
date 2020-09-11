import styles from '../styles/Keyboard.module.scss'
import Link from 'next/link'

const Letter = (char, selected) => (
    <Link key={char} scroll={false} href={`/list/${char}`}>
        <a className={`${styles.letter} ${char === selected ? styles.selected : ''}`}>
            {char}
        </a>
    </Link>
)

export default function Keyboard({ letter }) {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                {
                    'qwertyuiop'.split('').map(char => Letter(char, letter))
                }
            </div>
            <div className={styles.row}>
                {
                    'asdfghjkl'.split('').map(char => Letter(char, letter))
                }
            </div>
            <div className={styles.row}>
                {
                    'zxcvbnm'.split('').map(char => Letter(char, letter))
                }
            </div>
        </div>
    )
}