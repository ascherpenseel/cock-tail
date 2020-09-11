import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react' 
import styles from '../../styles/ListBySearch.module.scss'

import Cover from '../../components/Cover'
import Header from '../../components/Header'

export default function ListByLetter() {
    const router = useRouter()
    const { word } = router.query

    useEffect(() => {
        window.scroll(0, window.innerHeight === window.scrollY ? window.innerHeight - 1 : window.innerHeight)
    },[]) 

    return (
        <>
            <Head><title>{word} cocktails</title></Head>
            <Cover />
            <Header />
            <div className={styles.container}>
                <div className={`${styles.heading} font-script`}>
                    Search results for: <div className={styles.underlined}>{word}</div>
                </div>
            </div>
        </>
    )
}