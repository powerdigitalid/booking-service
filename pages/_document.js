import { Html, Head, Main, NextScript } from 'next/document'
import Scripts from '../components/admincomponent/utils/scripts'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Scripts/>
      </body>
    </Html>
  )
}