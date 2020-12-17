import { usePanelbear } from '../hooks/panelbear'
import '../styles/globals.css'

export default function Site({ Component, pageProps }) {
  usePanelbear(process.env.NEXT_PUBLIC_ANALYTICS_ID)

  return <Component {...pageProps} />
}
