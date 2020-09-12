import '../styles/globals.scss'
import { AppContextProvider } from '../context/context'

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  )
}

export default MyApp
