import Layout from '../../../components/adminpage/utils/layout'
import BookingTableComponent from '../../../components/adminpage/booking/bookingtable'
import { useEffect } from 'react';
import { getCookie, validateToken } from '../../../libs/cookie.lib';

export default function TambahBoking() {
  useEffect(() => {
    if(getCookie("token") === "" && getCookie("username") === ""){
      window.location.href = "/login";
    } else {
      validateToken(getCookie("token")) ? null : window.location.href = "/login";
    }
  }, []);
  return (
    <Layout>
      <BookingTableComponent />
    </Layout>
  )
}