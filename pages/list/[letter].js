import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/ListByLetter.module.scss'

import Cover from '../../components/Cover'
import Keyboard from '../../components/Keyboard'

export default function ListByLetter() {
    const router = useRouter()
    const { letter } = router.query
    return (
        <>
            <Head><title>List of cocktails</title></Head>
            <Cover />
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={`${styles.heading} font-script`}>List of cocktails</div>
                    <Keyboard letter={letter} />
                    <div className={`${styles.heading} ${styles.underlined} font-script`}>by first letter</div>
                </div>
                <div className={styles.list}>
                    Lista de letras por: {letter}
                </div>
            </div>
        </>
    )
}