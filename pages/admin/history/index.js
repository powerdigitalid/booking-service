import Layout from "../../../components/adminpage/utils/layout";
import BookingHistory from "../../../components/adminpage/history/bookinghistory";
import { getCookie, validateToken } from "../../../libs/cookie.lib";
import { useEffect } from "react";

export default function TambahBooking() {
  useEffect(() => {
    if(getCookie("token") === "" && getCookie("username") === ""){
      window.location.href = "/login";
    } else {
      validateToken(getCookie("token")) ? null : window.location.href = "/login";
    }
  }, []);
  return (
    <Layout>
      <BookingHistory />
    </Layout>
  )
}