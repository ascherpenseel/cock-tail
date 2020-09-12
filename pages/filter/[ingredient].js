import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react' 
import styles from '../../styles/ListByIngredient.module.scss'

import Cover from '../../components/Cover'
import Header from '../../components/Header'
import List from '../../components/List'
import { getListByIngredient } from '../../api/api'

export default function ListByIngredient() {
    const router = useRouter()
    const { ingredient } = router.query
    const { list, isLoading, isError } = getListByIngredient(ingredient)

    useEffect(() => {
        window.scroll(0, window.innerHeight === window.scrollY ? window.innerHeight - 1 : window.innerHeight)
    },[]) 

    return (
        <>
            <Head><title>Cocktails with {ingredient}</title></Head>
            <Cover />
            <Header noSwitch/>
            <div className={styles.container}>
                <div className={`${styles.heading} font-script`}>
                    Cocktails with: <div className={styles.underlined}>{ingredient}</div>
                </div>
                <List list={list} isLoading={isLoading} isError={isError} />
            </div>
        </>
    )
}