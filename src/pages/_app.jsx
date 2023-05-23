import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { store } from '../../public/app/store'
import { Provider } from 'react-redux'


export default function App({ Component, pageProps }) {
  return  <Provider store={store}>
  <Navbar />
  <Component {...pageProps} />
  
  </Provider>
}
