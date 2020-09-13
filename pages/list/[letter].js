import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/ListByLetter.module.scss'
import Keyboard from '../../components/Keyboard'
import { getListByLetter } from '../../api/api'
import Layout from '../../components/Layout'

export default function ListByLetter() {
    const router = useRouter()
    const { letter } = router.query
    const listData = getListByLetter(letter)

    return (
        <>
            <Head><title>List of cocktails</title></Head>
            <Layout listData={listData}>
                <div className={styles.header}>
                    <div className={`${styles.heading} font-script`}>List of cocktails</div>
                    <Keyboard letter={letter} />
                    <div className={`${styles.heading} ${styles.underlined} font-script`}>by first letter</div>
                </div>
            </Layout>
        </>
    )
}