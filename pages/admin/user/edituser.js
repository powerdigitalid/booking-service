import React, { useEffect } from 'react'
import Layout from '../../../components/adminpage/utils/layout'
import EditUserComponent from '../../../components/adminpage/user/edituser'
import { getCookie, validateToken } from '../../../libs/cookie.lib';

export default function EditUser() {
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
        <EditUserComponent />
      </Layout>
    </div>
  )
}
