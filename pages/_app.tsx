import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import Global from "../styles/Global.styled"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Global />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
