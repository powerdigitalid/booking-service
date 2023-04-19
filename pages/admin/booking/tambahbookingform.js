import React, { useEffect } from 'react'
import Layout from '../../../components/adminpage/utils/layout'
import TambahBokingComponent from '../../../components/adminpage/booking/tambahboking'
import { getCookie, validateToken } from '../../../libs/cookie.lib';


export default function TambahBokingForm() {
  useEffect(() => {
    if(getCookie("token") === "" && getCookie("username") === ""){
      window.location.href = "/login";
    } else {
      validateToken(getCookie("token")) ? null : window.location.href = "/login";
    }
  }, []);
  return (
    <div>
      <Layout>
        <TambahBokingComponent />
      </Layout>
    </div>
  )
}
