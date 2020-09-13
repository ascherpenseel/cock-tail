import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react' 
import styles from '../../styles/ListByIngredient.module.scss'
import Layout from '../../components/Layout'
import { getListByIngredient } from '../../api/api'

export default function ListByIngredient() {
    const router = useRouter()
    const { ingredient } = router.query
    const listData = getListByIngredient(ingredient)

    useEffect(() => {
        window.scroll(0, window.innerHeight)
    },[]) 

    return (
        <>
            <Head><title>Cocktails with {ingredient}</title></Head>
            <Layout listData={listData} noAlcoholicFilter={true}>
                <div className={`${styles.heading} font-script`}>
                    Cocktails with: <div className={styles.underlined}>{ingredient}</div>
                </div>
            </Layout>
        </>
    )
}