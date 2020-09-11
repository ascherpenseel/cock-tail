import Head from 'next/head'
import { useRouter } from 'next/router'

export default function ListByLetter() {
    const router = useRouter()
    const { id } = router.query
    return (
        <>
            <Head><title>List of cocktails</title></Head>
            <div>Cocktail {id}</div>
        </>
    )
}