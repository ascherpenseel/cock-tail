import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import 'proxy-polyfill'
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
