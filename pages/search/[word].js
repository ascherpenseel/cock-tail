import Head from 'next/head'
import { useRouter } from 'next/router'

export default function ListByLetter() {
    const router = useRouter()
    const { word } = router.query
    return (
        <>
            <Head><title>List of cocktails</title></Head>
            <div>Busca {word}</div>
        </>
    )
}