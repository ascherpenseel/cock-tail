import Head from 'next/head'
import { useRouter } from 'next/router'

import Cover from '../../components/Cover'

export default function ListByLetter() {
    const router = useRouter()
    const { letter } = router.query
    return (
        <>
            <Head><title>List of cocktails</title></Head>
            <Cover />
        </>
    )
}