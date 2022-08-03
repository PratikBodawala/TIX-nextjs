import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layouts/Layout'
import AuthLayout from "../components/Layouts/AuthLayout";
function MyApp({ Component, pageProps, router: {route} }: AppProps) {
    console.log(route)

  return route !== '/' ? (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  ): (<AuthLayout><Component {...pageProps} /></AuthLayout>)
}

export default MyApp
