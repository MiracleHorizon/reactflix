import { AppProps } from 'next/app'

import 'antd/dist/antd.css'
import '../styles/global/_marked_list.scss'
import '../styles/global/_divider.scss'
import '../styles/_media.scss'
import '../styles/movie/_variables.scss'
import '../styles/mixins/_horizontal-scroll-wrapper.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
