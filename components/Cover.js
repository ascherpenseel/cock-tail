import styles from '../styles/Cover.module.scss'
import Search from './Search'
import Header from './Header'

export default function Cover() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.img}>
                    <img src='../cock-tail.png' />
                </div>
                <div className={styles.content}>
                    <h1 className={`${styles.title} font-script`}>The Cock Tail</h1>
                    <p className='text-md'>
                        {['Find your desired flavors, become a mixology artist.', 'What do you fancy today?'].join('\n')}
                    </p>
                    <Search />
                </div>
            </div>
            <Header />
        </>
    )
}