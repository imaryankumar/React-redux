import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { store } from '../../public/app/store'
import { Provider } from 'react-redux'
import {ThemeProvider} from 'next-themes'


export default function App({ Component, pageProps }) {
  return <ThemeProvider attribute="class">
     <Provider store={store}>
  <Navbar />
  <Component {...pageProps} />
  
  </Provider>
  </ThemeProvider>
}
