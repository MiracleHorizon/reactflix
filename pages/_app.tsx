import { AppProps } from 'next/app'

import 'antd/dist/antd.css'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
