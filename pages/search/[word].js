import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react' 
import styles from '../../styles/ListBySearch.module.scss'
import { getListBySearch } from '../../api/api'
import Layout from '../../components/Layout'

export default function ListByLetter() {
    const router = useRouter()
    const { word } = router.query
    const listData = getListBySearch(word)

    useEffect(() => {
        window.scroll(0, window.innerHeight)
    },[word]) 

    return (
        <>
            <Head><title>{word} cocktails</title></Head>
            <Layout listData={listData}>
                <div className={`${styles.heading} font-script`}>
                    Search results for: <div className={styles.underlined}>{word}</div>
                </div>
            </Layout>
        </>
    )
}