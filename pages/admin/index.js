import Head from 'next/head'
import Layout from '../../components/adminpage/utils/layout'
import Dashboard from '../../components/adminpage/dashboard/dashboard'
import { useEffect } from 'react'
import { getCookie, validateToken } from '../../libs/cookie.lib';
export default function Home() {
  useEffect(() => {
    if(getCookie("token") === "" && getCookie("username") === ""){
      window.location.href = "/login";
    } else {
      validateToken(getCookie("token")) ? null : window.location.href = "/login";
    }
  }, []);
  return (
    <>
      <Head>
        <title>Booking Services</title>
        <meta name="description" content="Booking Service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Dashboard />
      </Layout>
    </> 
  )
}
