import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styles from '../../styles/CocktailDetails.module.scss'

import Cover from '../../components/Cover'
import Header from '../../components/Header'
import Cocktail from '../../components/Cocktail'
import { getCocktailById } from '../../api/api'

export default function CocktailDetails() {
    const router = useRouter()
    let data = {
        cocktail: null,
        isLoading: false,
        isError: false
    }

    if (router.query.data) {
        data.cocktail = JSON.parse(router.query.data)
    }
    else {
        data = getCocktailById(router.query.id)
    }

    useEffect(() => {
        window.scroll(0, window.innerHeight)
    },[]) 

    return (
        <>
            <Head><title>{data.cocktail ? data.cocktail.strDrink : 'And your cocktail is ...'}</title></Head>
            <Cover />
            <Header noAlcoholicFilter />
            <div className={styles.container}>
                <Cocktail cocktail={data.cocktail} isLoading={data.isLoading} isError={data.isError} />
            </div>
        </>
    )
}