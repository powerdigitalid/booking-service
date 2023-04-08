import { Html, Head, Main, NextScript } from 'next/document'
import AdminScripts from '../components/admincomponent/utils/scripts'
import HomeScripts from '../components/landingpage/scripts'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <AdminScripts/>
        <HomeScripts/>
      </body>
    </Html>
  )
}