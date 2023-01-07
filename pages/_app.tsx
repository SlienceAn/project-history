import '../styles/globals.scss'
import '../styles/TextContent.scss'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import 'draft-js/dist/Draft.css'
import '../styles/WorkList.scss'
import '../styles/Profile.scss'
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
