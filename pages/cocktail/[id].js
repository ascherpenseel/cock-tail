import Head from 'next/head'
import { useRouter } from 'next/router'

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

    return (
        <>
            <Head><title>Caca</title></Head>
            <Cover />
            <Header />
            <Cocktail cocktail={data.cocktail} isLoading={data.isLoading} isError={data.isError} />
        </>
    )
}