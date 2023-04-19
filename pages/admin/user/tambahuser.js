import React, { useEffect } from 'react'
import Inputuser from '../../../components/adminpage/user/inputuser'
import Layout from '../../../components/adminpage/utils/layout'
import { getCookie, validateToken } from '../../../libs/cookie.lib';

export default function TambahUser() {
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
        <Inputuser />
      </Layout>
    </div>
  )
}
