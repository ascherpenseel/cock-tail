import styles from '../styles/Layout.module.scss'
import Cover from './Cover'
import Header from './Header'
import List from './List'
import Transition from './Transition'

export default function Layout({ children, noAlcoholicFilter, listData}) {
    return (
        <>
            <Cover />
            <Header noAlcoholicFilter={noAlcoholicFilter}/>
            <Transition effect='scaleUp'>
                <div className={styles.container}>
                    {children}
                    <List list={listData.list} isLoading={listData.isLoading} isError={listData.isError} noAlcoholicFilter={noAlcoholicFilter}/>
                </div>
            </Transition>
        </>
    )
}