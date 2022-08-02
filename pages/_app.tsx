import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layouts/Layout'

function MyApp({ Component, pageProps, router: {route} }: AppProps) {
    console.log(route)

  return route !== '/' ? (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  ): (<Component {...pageProps} />)
}

export default MyApp
