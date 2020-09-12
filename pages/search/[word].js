import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react' 
import styles from '../../styles/ListBySearch.module.scss'

import Cover from '../../components/Cover'
import Header from '../../components/Header'
import List from '../../components/List'
import { getListBySearch } from '../../api/api'

export default function ListByLetter() {
    const router = useRouter()
    const { word } = router.query
    const { list, isLoading, isError } = getListBySearch(word)

    useEffect(() => {
        window.scroll(0, window.innerHeight === window.scrollY ? window.innerHeight - 1 : window.innerHeight)
    },[word]) 

    return (
        <>
            <Head><title>{word} cocktails</title></Head>
            <Cover />
            <Header />
            <div className={styles.container}>
                <div className={`${styles.heading} font-script`}>
                    Search results for: <div className={styles.underlined}>{word}</div>
                </div>
                <List list={list} isLoading={isLoading} isError={isError} />
            </div>
        </>
    )
}