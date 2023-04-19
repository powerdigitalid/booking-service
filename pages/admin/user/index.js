import React, { useEffect } from 'react'
import Tableuser from '../../../components/adminpage/user/tableuser'
import Layout from '../../../components/adminpage/utils/layout'
import { getCookie, validateToken } from '../../../libs/cookie.lib';

export default function Index() {
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
        <Tableuser />
      </Layout>
    </div>
  )
}
