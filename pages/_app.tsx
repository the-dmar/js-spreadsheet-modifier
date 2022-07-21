import type { AppProps } from "next/app"
import Global from "../styles/Global.styled"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
